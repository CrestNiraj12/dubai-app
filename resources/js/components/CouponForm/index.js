import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { PERCENTAGE, YEARLY, AMOUNT } from "../../constants";
import axios from "axios";

const CouponForm = ({ setDiscountedPrice, setValidated, course }) => {
    const [coupon, setCoupon] = useState("");
    const [validatedOwn, setValidateOwn] = useState("");

    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        const discount = JSON.parse(localStorage.getItem("discount"));
        if (discount) {
            setCoupon(discount.code);
            setValidateOwn(true);
            setValidated(true);
            setDiscountedPrice(discount.discountedAmount);
        } else
            axios
                .get("/api/coupons")
                .then(res => setCoupons(res.data))
                .catch(err => console.log(err));
    }, []);

    const validCoupon = coupons.map(c => c.code).includes(coupon)
        ? coupons.find(c => c.code === coupon)
        : null;

    const handleApplyCoupon = e => {
        e.preventDefault();
        if (coupons.map(c => c.code).includes(coupon)) {
            setValidateOwn(true);
            setValidated(true);
            const period = validCoupon.discount_period;
            const period_fee =
                period === YEARLY ? course.yearly_fee : course.yearly_fee / 2;
            const discount_type = validCoupon.type;
            const discount = validCoupon.discount;
            const discount_amount =
                discount_type === PERCENTAGE
                    ? (discount / 100) * period_fee
                    : discount;
            setDiscountedPrice(course.yearly_fee * 4 - discount_amount);
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
                    <Form.Control
                        value={coupon}
                        type="text"
                        onChange={e => setCoupon(e.target.value.toUpperCase())}
                        isInvalid={
                            validatedOwn === "" ? validatedOwn : !validatedOwn
                        }
                        style={{ width: "60%", marginRight: "10px" }}
                        disabled={validatedOwn}
                    />
                    <Form.Control.Feedback type="invalid">
                        <small>Coupon code is invalid!</small>
                    </Form.Control.Feedback>
                    {coupons.length > 0 && validatedOwn && (
                        <small style={{ color: "#2c9203" }}>
                            Applied{" "}
                            {`${validCoupon.discount}${
                                validCoupon.type === PERCENTAGE
                                    ? PERCENTAGE
                                    : " " + AMOUNT
                            }`}{" "}
                            discount for the{" "}
                            {coupons
                                .find(c => c.code === coupon)
                                .discount_period.toLowerCase()}
                            !
                        </small>
                    )}
                    <Button
                        onClick={handleApplyCoupon}
                        disabled={validatedOwn}
                        style={{ width: "30%" }}
                    >
                        Apply
                    </Button>
                </Row>
            </Form.Group>
        </Form>
    );
};

export default CouponForm;
