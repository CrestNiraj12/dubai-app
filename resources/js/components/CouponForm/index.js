import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { PERCENTAGE, YEARLY, SEMESTER } from "../../constants";

const CouponForm = ({ setDiscountedPrice, setValidated, course }) => {
    const [coupon, setCoupon] = useState("");
    const [validatedOwn, setValidateOwn] = useState("");

    const [coupons, setCoupons] = useState([
        {
            code: "TEST25",
            discount: 25,
            type: PERCENTAGE,
            discount_period: SEMESTER
        }
    ]);

    useEffect(() => {
        const discount = JSON.parse(localStorage.getItem("discount"));
        if (discount) {
            setCoupon(discount.code);
            setValidateOwn(true);
            setValidated(true);
            setDiscountedPrice(discount.discountedAmount);
        }
    }, []);

    const handleApplyCoupon = e => {
        e.preventDefault();
        if (coupons.map(c => c.code).includes(coupon)) {
            setValidateOwn(true);
            setValidated(true);
            const period = coupons.find(c => c.code === coupon).discount_period;
            const period_fee =
                period === YEARLY ? course.yearly_fee : course.yearly_fee / 2;
            const discount_type = coupons.find(c => c.code === coupon).type;
            const discount = coupons.find(c => c.code === coupon).discount;
            const discount_amount =
                discount_type === PERCENTAGE
                    ? (discount / 100) * period_fee
                    : discount;
            setDiscountedPrice(period_fee - discount_amount);
            localStorage.setItem(
                "discount",
                JSON.stringify({
                    code: coupon,
                    discount_period: period,
                    discount: discount,
                    type: discount_type,
                    amount: discount_amount,
                    semester: course.yearly_fee / 2 - discount_amount,
                    yearly: course.yearly_fee - discount_amount,
                    discountedAmount: course.yearly_fee * 4 - discount_amount
                })
            );
        } else {
            setValidateOwn(false);
            setValidated(false);
        }
    };

    return (
        <Form
            noValidate
            validated={validatedOwn}
            style={{
                marginBottom: "12px"
            }}
            onSubmit={handleApplyCoupon}
        >
            <Form.Group>
                <Form.Label>Apply Coupon (Optional)</Form.Label>
                <Row>
                    <Col
                        md="9"
                        style={{
                            padding: 0
                        }}
                    >
                        <Form.Control
                            value={coupon}
                            type="text"
                            onChange={e =>
                                setCoupon(e.target.value.toUpperCase())
                            }
                            isInvalid={
                                validatedOwn === ""
                                    ? validatedOwn
                                    : !validatedOwn
                            }
                            disabled={validatedOwn}
                        />
                        <Form.Control.Feedback type="invalid">
                            <small>Coupon code is invalid!</small>
                        </Form.Control.Feedback>
                        {validatedOwn && (
                            <small style={{ color: "#2c9203" }}>
                                Applied{" "}
                                {`${
                                    coupons.find(c => c.code === coupon)
                                        .discount
                                }${
                                    coupons.find(c => c.code === coupon).type
                                }`}{" "}
                                discount for a{" "}
                                {coupons
                                    .find(c => c.code === coupon)
                                    .discount_period.toLowerCase()}
                                !
                            </small>
                        )}
                    </Col>
                    <Col
                        md="3"
                        style={{
                            paddingRight: 0
                        }}
                    >
                        <Button
                            onClick={handleApplyCoupon}
                            style={{
                                width: "100%"
                            }}
                            disabled={validatedOwn}
                        >
                            Apply
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );
};

export default CouponForm;
