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
import Payment from "../Payment";
import axios from "axios";
import PageLoadSpinner from "../../components/PageLoadSpinner";
import { useHistory } from "react-router-dom";

const Enroll = ({ match }) => {
    var history = useHistory();
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
    const [buttonLoading, setButtonLoading] = useState(false);
    const [payment, setPayment] = useState(false);
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState(initialData);
    const [invalidDatas, setInvalidDatas] = useState(initialData);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [applicantId, setApplicantId] = useState(null);

    useEffect(() => {
        axios
            .get(`/api/courses/${match.params.id}`)
            .then(res => {
                setCourse(res.data);
                const coupon = localStorage.getItem("couponId");
                if (coupon)
                    setData({
                        ...data,
                        coupon_applied: true,
                        coupon_id: coupon
                    });
                setLoading(false);
            })
            .then(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get(`/api/applicants`).then(res => {
            setApplications(res.data);
        });
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

        const emails = applications.map(data => data.email);
        if (emails.includes(data["email"])) {
            isValid = false;
            errors["email"] =
                "We have already received an application from this email!";
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

    const getApplicantId = () => applicantId;

    const handleSubmit = e => {
        e.preventDefault();
        setButtonLoading(true);
        if (validateData()) {
            setValidated(true);
            axios
                .post("/api/applicants", data)
                .then(res => {
                    setApplicantId(res.data.applicantId);
                    setButtonLoading(false);
                    setPayment(true);
                })
                .catch(err => {
                    console.log(err.response);
                    alert(
                        "Error! There might be something wrong with your provided values. Please try again!"
                    );
                    setButtonLoading(false);
                });
        } else {
            setValidated(false);
            setButtonLoading(false);
        }
    };

    const cancelPayment = e => {
        const confirm = window.confirm(
            "Are you sure you want to cancel the payment?"
        );
        if (confirm) {
            localStorage.removeItem("couponId");
            localStorage.removeItem("discount");
            history.push("/");
        }
    };

    return (
        <>
            {loading ? (
                <PageLoadSpinner />
            ) : (
                <>
                    <Fragment>
                        <Modal show={payment} onHide={cancelPayment}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Choose a payment method
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {" "}
                                <Payment
                                    course={course}
                                    getApplicantId={getApplicantId}
                                />
                            </Modal.Body>
                        </Modal>
                    </Fragment>

                    <Container className="enroll">
                        <Row>
                            <Col>
                                <h2>Please fill up the enrollment form</h2>
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
                                            value={data.school}
                                            isInvalid={!!invalidDatas.school}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {invalidDatas.school}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button onClick={handleSubmit}>
                                        {buttonLoading && (
                                            <>
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                    className="buttonLoader"
                                                />
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </>
                                        )}
                                        {!buttonLoading && <span>Submit</span>}
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
};

export default Enroll;
