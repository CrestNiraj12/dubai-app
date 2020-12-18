import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useHistory } from "react-router-dom";
import {
    SEMESTER,
    YEARLY,
    ENTIRE_COURSE,
    AMOUNT,
    PERCENTAGE
} from "../../constants";
import "../../../css/Payment.css";
import PageLoadSpinner from "../../components/PageLoadSpinner";
import CurrencyConverter from "@y2nk4/currency-converter";
import axios from "axios";

const stripePromise = loadStripe(
    "pk_test_51HrrlNARkfToiPFSupHqiJpGnsej3pPYyODpRU5x651HuosD4y4b9fufVkDzfKf0BQNbKgxwAKZWMiFWxrnIgaRO000iRAqmx5"
);

const PAYPAL_CLIENT_ID =
    "AU7wEngzj7X-pWbhKsvfGbT4AaLZ0zEyoTL8XPiv01ujkCHwdZdHelg-TrCA-NjYkWz2VwToxE1DyPWV";

const Payment = ({ course, applicantId }) => {
    var history = useHistory();
    const [coupon, setCoupon] = useState(null);
    const [couponApplied, setCouponApplied] = useState(false);
    const [selected, setSelected] = useState(null);
    const [payDiscount, setPayDiscount] = useState(null);
    const [finalAmount, setFinalAmount] = useState(null);
    const [finalAmountToUSD, setFinalAmountToUSD] = useState(null);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const converter = new CurrencyConverter("9d5c62482fe6c1519c50");

    const calculateFinalAmount = period => {
        var amount;
        var discountCourse;
        if (period === SEMESTER)
            amount = couponApplied ? coupon.semester : course.yearly_fee / 2;
        else if (period === YEARLY) {
            discountCourse =
                0.1 * (couponApplied ? coupon.yearly : course.yearly_fee);
            amount =
                (couponApplied ? coupon.yearly : course.yearly_fee) -
                discountCourse;
        } else if (period === ENTIRE_COURSE) {
            discountCourse =
                0.25 *
                (couponApplied
                    ? coupon.discountedAmount
                    : course.yearly_fee * 4);
            amount =
                (couponApplied
                    ? coupon.discountedAmount
                    : course.yearly_fee * 4) - discountCourse;
        }
        setPayDiscount(discountCourse);
        setFinalAmount(amount);
        converter.convert("AED", "USD", amount).then(res => {
            setFinalAmountToUSD(Number(res.toFixed(2)));
        });
    };

    useEffect(() => {
        setButtonLoading(false);
        const couponId = localStorage.getItem("couponId");
        const discountAmount = Number(localStorage.getItem("discount"));
        if (couponId) {
            setCouponApplied(true);
            axios.get(`/api/coupons/${couponId}`).then(res => {
                const couponData = res.data;
                setCoupon({
                    code: couponData.code,
                    amount: discountAmount,
                    type: couponData.type,
                    semester: course.yearly_fee / 2 - discountAmount,
                    yearly: course.yearly_fee - discountAmount,
                    discountedAmount: course.yearly_fee * 4 - discountAmount,
                    discount: couponData.discount,
                    discount_period: couponData.discount_period
                });
                setLoading(false);
            });
        } else setLoading(false);
    }, []);

    const onApprove = (data, actions) => {
        actions.order.capture().then(() => {
            axios
                .put(`/api/applicants/${applicantId}`, {
                    payment_made: true
                })
                .then(() => {
                    const details = {
                        method: "paypal",
                        amount: finalAmountToUSD,
                        currency: "USD",
                        applicant_id: applicantId,
                        period: selected
                    };
                    axios.post("/api/payments/", details);
                })
                .then(() => {
                    history.push(
                        `/success/?order_id=${data.orderID}&method=paypal`
                    );
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

    const payWithStripe = async e => {
        e.preventDefault();
        setButtonLoading(true);

        const stripe = await stripePromise;

        const courseItem = JSON.stringify({
            price_data: {
                currency: "AED",
                product_data: { name: course.title },
                unit_amount: Number(finalAmount.toFixed(2)) * 100
            },
            quantity: 1
        });

        const response = await axios.post("/api/stripe/pay", {
            course: courseItem,
            applicantId,
            period: selected
        });

        const result = await stripe.redirectToCheckout({
            sessionId: response.data
        });

        if (result.error) console.log(result.error);
    };

    const handleSelected = e => {
        const period = e.target.value;
        setSelected(period);
        calculateFinalAmount(period);
    };

    const getFinalAmountToUSD = () => finalAmountToUSD;

    return (
        <>
            {loading ? (
                <PageLoadSpinner />
            ) : (
                <Container>
                    <Row>
                        <Col>
                            <p className="submissionInfo">
                                Your details has been successfully submitted!
                                You can pay now for a semester, year or for the
                                entire course!
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form style={{ margin: "20px 0" }}>
                                <Form.Check
                                    value={SEMESTER}
                                    label="Pay for one semester"
                                    type="radio"
                                    onChange={handleSelected}
                                    checked={selected === SEMESTER}
                                />
                                <Form.Check
                                    value={YEARLY}
                                    label="Pay for one year (added 10% discount)"
                                    type="radio"
                                    onChange={handleSelected}
                                    checked={selected === YEARLY}
                                />
                                <Form.Check
                                    value={ENTIRE_COURSE}
                                    label="Pay for entire course (added 25% discount)"
                                    type="radio"
                                    onChange={handleSelected}
                                    checked={selected === ENTIRE_COURSE}
                                />
                            </Form>
                        </Col>
                    </Row>
                    {course && selected && (
                        <Row style={{ lineHeight: 0.6 }}>
                            <Col md={8}>
                                <small>
                                    Total tuition fee (
                                    {selected.split("_").join(" ")}):
                                </small>
                            </Col>
                            <Col md={4} style={{ textAlign: "right" }}>
                                <p>
                                    &nbsp;&nbsp;
                                    {(selected === SEMESTER
                                        ? course.yearly_fee / 2
                                        : selected === YEARLY
                                        ? course.yearly_fee
                                        : course.yearly_fee * 4
                                    ).toLocaleString(undefined, {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2
                                    })}{" "}
                                    {AMOUNT}
                                </p>
                            </Col>
                        </Row>
                    )}
                    {coupon && selected && (
                        <Row style={{ lineHeight: 0.6 }}>
                            <Col md={8}>
                                <small>
                                    Applied:{" "}
                                    <span className="text-primary">
                                        {coupon.code}
                                    </span>{" "}
                                    ({coupon.discount}
                                    {(coupon.type === PERCENTAGE
                                        ? PERCENTAGE
                                        : " " + AMOUNT) +
                                        " of " +
                                        coupon.discount_period
                                            .split("_")
                                            .join(" ")
                                            .toLowerCase()}
                                    )
                                </small>
                            </Col>
                            <Col md={4} style={{ textAlign: "right" }}>
                                <p style={{ color: "#d4062d" }}>
                                    -{" "}
                                    {coupon.amount.toLocaleString(undefined, {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2
                                    })}{" "}
                                    {AMOUNT}
                                </p>
                            </Col>
                        </Row>
                    )}
                    {selected && selected !== SEMESTER && payDiscount && (
                        <Row style={{ lineHeight: 0.6 }}>
                            <Col md={8}>
                                <small>
                                    Applied:{" "}
                                    {selected === YEARLY ? "10%" : "25%"}{" "}
                                    Discount
                                </small>
                            </Col>
                            <Col
                                md={4}
                                style={{
                                    textAlign: "right"
                                }}
                            >
                                <p
                                    style={{
                                        color: "#d4062d",
                                        marginBottom: "10px"
                                    }}
                                >
                                    -{" "}
                                    {payDiscount.toLocaleString(undefined, {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2
                                    })}{" "}
                                    {AMOUNT}
                                </p>
                            </Col>
                        </Row>
                    )}

                    {finalAmount && selected && (
                        <Row>
                            <Col md={8} style={{ paddingTop: "10px" }}>
                                <p>Total:</p>
                            </Col>
                            <Col md={4} className="totalAmount">
                                <span
                                    className="text-primary"
                                    style={{ fontSize: "16px" }}
                                >
                                    {finalAmount.toLocaleString(undefined, {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2
                                    })}{" "}
                                    {AMOUNT}
                                </span>
                            </Col>
                        </Row>
                    )}
                    {selected && (
                        <>
                            <Row>
                                <Col>
                                    <Button
                                        className="payment"
                                        onClick={payWithStripe}
                                    >
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
                                        {!buttonLoading && (
                                            <span>Pay with Stripe</span>
                                        )}
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <PayPalScriptProvider
                                        options={{
                                            "client-id": PAYPAL_CLIENT_ID,
                                            currency: "USD"
                                        }}
                                    >
                                        <PaypalButtonsCustomized
                                            createOrder={createOrder}
                                            onApprove={onApprove}
                                            onCancel={onCancel}
                                            finalAmountToUSD={
                                                getFinalAmountToUSD
                                            }
                                        />
                                    </PayPalScriptProvider>
                                </Col>
                            </Row>
                        </>
                    )}
                </Container>
            )}
        </>
    );
};

const PaypalButtonsCustomized = ({
    createOrder,
    onApprove,
    onCancel,
    finalAmountToUSD
}) => {
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
                forceReRender={finalAmountToUSD()}
            />
        </>
    );
};

export default Payment;
