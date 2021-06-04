import React, { useState, useEffect, Fragment } from "react";
import {
    Col,
    Container,
    Form,
    Row,
    Button,
    Modal,
    Spinner
} from "react-bootstrap";
import "../../../css/Enroll.css";
import axios from "axios";
import PageLoadSpinner from "../../components/PageLoadSpinner";
import { loadStripe } from "@stripe/stripe-js";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import CurrencyConverter from "@y2nk4/currency-converter";

const stripePromise = loadStripe(
    "pk_test_51HrrlNARkfToiPFSupHqiJpGnsej3pPYyODpRU5x651HuosD4y4b9fufVkDzfKf0BQNbKgxwAKZWMiFWxrnIgaRO000iRAqmx5"
);

const PAYPAL_CLIENT_ID =
    "AU7wEngzj7X-pWbhKsvfGbT4AaLZ0zEyoTL8XPiv01ujkCHwdZdHelg-TrCA-NjYkWz2VwToxE1DyPWV";

const Enroll = ({ match }) => {
    const initialData = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        dob: "",
        qualification: "",
        gpa: "",
        school: "",
        address: "",
        coupon_applied: false,
        coupon_id: null,
        course_id: match.params.id
    };
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState(initialData);
    const [invalidDatas, setInvalidDatas] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [applicantId, setApplicantId] = useState(null);
    const [detailsSubmitted, setDetailsSubmitted] = useState(false);
    const [finalAmountToUSD, setFinalAmountToUSD] = useState(null);
    const converter = new CurrencyConverter("9d5c62482fe6c1519c50");

    useEffect(() => {
        axios
            .get(`/api/courses/${match.params.id}`)
            .then(res => {
                setCourse(res.data);
                converter.convert("AED", "USD", res.data.fees).then(res => {
                    setFinalAmountToUSD(Number(res.toFixed(2)));
                });
                const coupon = localStorage.getItem("couponId");
                if (coupon)
                    setData({
                        ...data,
                        coupon_applied: true,
                        coupon_id: coupon
                    });
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value });

    const validateData = () => {
        let errors = {};
        let isValid = true;
        var pattern;

        if (!data["firstname"] || !data["lastname"]) {
            isValid = false;
            if (!data["firstname"])
                errors["firstname"] = "Please enter your firstname.";
            if (!data["lastname"])
                errors["lastname"] = "Please enter your lastname.";
        }

        if (!data["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email address.";
        }

        if (data["email"] !== "undefined") {
            pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(data["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!data["phone"]) {
            isValid = false;
            errors["password"] = "Please enter your phone number.";
        }

        if (typeof data["phone"] !== "undefined") {
            pattern = new RegExp(/^([+]?[0-9]{3}[-]?)?[0-9]{10}$/i);
            if (!pattern.test(data["phone"])) {
                isValid = false;
                errors["phone"] = "Please enter a valid phone number";
            }
        }

        if (!data["dob"]) {
            isValid = false;
            errors["dob"] = "Please enter your date of birth.";
        }

        if (!data["address"]) {
            isValid = false;
            errors["address"] = "Please enter your current address.";
        }

        if (!data["qualification"]) {
            isValid = false;
            errors["qualification"] = "Please enter your qualification.";
        }

        if (!data["gpa"]) {
            isValid = false;
            errors["gpa"] = "Please enter your GPA.";
        }

        if (data["gpa"] > 4) {
            isValid = false;
            errors["gpa"] = "Max GPA is 4.00";
        }

        if (!data["school"]) {
            isValid = false;
            errors["school"] = "Please enter your previous school/college.";
        }

        setInvalidDatas(errors);

        return isValid;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validateData()) {
            setValidated(true);
            axios
                .post("/api/applicants", data)
                .then(res => {
                    setApplicantId(res.data.applicantId);
                    setDetailsSubmitted(true);
                })
                .catch(err => {
                    console.log(err.response);
                    alert(
                        "Error! There might be something wrong with your provided values. Please try again!"
                    );
                });
        } else {
            alert("Error occured while validating your details!");
            setValidated(false);
        }
    };

    const cancelPayment = e => {
        const confirm = window.confirm(
            "Are you sure you want to cancel the payment?"
        );
        if (confirm) {
            localStorage.clear();
            window.location = "/";
        }
    };

    const payWithStripe = async e => {
        e.preventDefault();

        if (course.fees <= 0) {
            alert("Amount should be greater than 0");
            return;
        }

        const stripe = await stripePromise.catch(err => {
            console.log(err);
        });

        const courseItem = JSON.stringify({
            price_data: {
                currency: "AED",
                product_data: {
                    name: course.title,
                    images: [
                        window.location.origin +
                            "/storage/" +
                            course.thumbnail.replaceAll("\\", "/")
                    ]
                },
                unit_amount: course.fees * 100
            },
            quantity: 1
        });

        const response = await axios
            .post("/api/stripe/pay", {
                course: courseItem,
                applicantId
            })
            .catch(err => {
                console.log(err.response);
            });

        const result = await stripe.redirectToCheckout({
            sessionId: response.data
        });

        if (result.error) console.log(result.error);
    };

    const onApprove = (data, actions) => {
        actions.order.capture().then(() => {
            const details = {
                method: "paypal",
                amount: finalAmountToUSD,
                currency: "USD",
                applicant_id: applicantId
            };
            axios
                .post("/api/payments", details)
                .then(async () => {
                    return await axios.put(`/api/applicants/${applicantId}`, {
                        payment_made: true
                    });
                })
                .then(() => {
                    window.location.href = `/success/?order_id=${data.orderID}&method=paypal`;
                })
                .catch(err => "Error while creating payments!");
        });
    };

    const onCancel = data => {
        history.push("/cancel");
    };

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency: "USD",
                        value: finalAmountToUSD
                    }
                }
            ]
        });
    };

    return (
        <>
            {loading ? (
                <PageLoadSpinner />
            ) : (
                <>
                    <Container className="enroll">
                        <Row>
                            <Col>
                                <h4 className="text-muted">Enrollment form</h4>
                                <Form
                                    noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}
                                >
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                name="firstname"
                                                type="text"
                                                value={data.firstname}
                                                isInvalid={
                                                    !!invalidDatas.firstname
                                                }
                                                onChange={handleChange}
                                                disabled={detailsSubmitted}
                                                size="sm"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {invalidDatas.firstname}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                name="lastname"
                                                value={data.lastname}
                                                onChange={handleChange}
                                                isInvalid={
                                                    !!invalidDatas.lastname
                                                }
                                                disabled={detailsSubmitted}
                                                type="text"
                                                size="sm"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {invalidDatas.lastname}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            name="email"
                                            onChange={handleChange}
                                            disabled={detailsSubmitted}
                                            value={data.email}
                                            isInvalid={!!invalidDatas.email}
                                            type="email"
                                            size="sm"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            name="phone"
                                            onChange={handleChange}
                                            disabled={detailsSubmitted}
                                            value={data.phone}
                                            isInvalid={!!invalidDatas.phone}
                                            type="tel"
                                            size="sm"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            name="address"
                                            onChange={handleChange}
                                            disabled={detailsSubmitted}
                                            value={data.address}
                                            isInvalid={!!invalidDatas.address}
                                            type="text"
                                            size="sm"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.address}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="dob"
                                            disabled={detailsSubmitted}
                                            value={data.dob}
                                            isInvalid={!!invalidDatas.dob}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.dob}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Qualification</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="qualification"
                                            value={data.qualification}
                                            disabled={detailsSubmitted}
                                            isInvalid={
                                                !!invalidDatas.qualification
                                            }
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.qualification}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>GPA</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="gpa"
                                            value={data.gpa}
                                            disabled={detailsSubmitted}
                                            isInvalid={!!invalidDatas.gpa}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.gpa}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>School/College</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="school"
                                            disabled={detailsSubmitted}
                                            value={data.school}
                                            isInvalid={!!invalidDatas.school}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.school}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <hr style={{ margin: "20px 0" }} />
                                    {detailsSubmitted ? (
                                        <>
                                            <h4 className="mb-3">Payment</h4>
                                            <small>
                                                <button
                                                    className="btn btn-link"
                                                    onClick={() =>
                                                        setDetailsSubmitted(
                                                            false
                                                        )
                                                    }
                                                    style={{ padding: 0 }}
                                                >
                                                    Edit your information
                                                </button>
                                            </small>
                                            <div>
                                                <button
                                                    className="btn btn-primary"
                                                    style={{
                                                        width: "100%",
                                                        margin: "10px 0",
                                                        height: "40px"
                                                    }}
                                                    onClick={payWithStripe}
                                                >
                                                    <span>Pay with Stripe</span>
                                                </button>
                                                <PayPalScriptProvider
                                                    options={{
                                                        "client-id": PAYPAL_CLIENT_ID,
                                                        currency: "GBP"
                                                    }}
                                                >
                                                    <PaypalButtonsCustomized
                                                        createOrder={
                                                            createOrder
                                                        }
                                                        onApprove={onApprove}
                                                        onCancel={onCancel}
                                                    />
                                                </PayPalScriptProvider>
                                            </div>
                                        </>
                                    ) : (
                                        <Button
                                            onClick={handleSubmit}
                                            style={{
                                                padding: "5px 20px",
                                                height: "40px"
                                            }}
                                        >
                                            <span>Submit</span>
                                        </Button>
                                    )}
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
};

const PaypalButtonsCustomized = ({ createOrder, onApprove, onCancel }) => {
    const [{ isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        const scriptProviderOptions = {
            "client-id": PAYPAL_CLIENT_ID
        };

        dispatch({
            type: "resetOptions",
            value: {
                ...scriptProviderOptions,
                "data-order-id": Date.now()
            }
        });
    }, [dispatch]);

    return (
        <>
            {isPending ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : null}
            <PayPalButtons
                style={{
                    layout: "vertical",
                    label: "pay",
                    height: 35
                }}
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                onCancel={data => onCancel(data)}
                onError={err => console.log(err)}
            />
        </>
    );
};

export default Enroll;
