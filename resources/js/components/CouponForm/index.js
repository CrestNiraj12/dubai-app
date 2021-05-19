import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { PERCENTAGE, YEARLY, AMOUNT } from "../../constants";
import axios from "axios";

const CouponForm = ({ setDiscountedPrice, setValidated, course }) => {
    const [coupon, setCoupon] = useState("");
    const [validatedOwn, setValidateOwn] = useState("");

    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        const couponId = localStorage.getItem("couponId");
        if (couponId) {
            axios.get(`/api/coupons/${couponId}`).then(res => {
                setCoupon(res.data.code);
                setValidateOwn(true);
                setValidated(true);
                setDiscountedPrice(
                    course.yearly_fee * 4 -
                        Number(localStorage.getItem("discount"))
                );
            });
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

            const period_fee =
                validCoupon.discount_period === YEARLY
                    ? course.yearly_fee
                    : course.yearly_fee / 2;
            const discount_amount =
                validCoupon.type === PERCENTAGE
                    ? (validCoupon.discount / 100) * period_fee
                    : validCoupon.discount;
            console.log(validCoupon.discount_period);
            console.log(discount_amount);
            setDiscountedPrice(course.yearly_fee * 4 - discount_amount);
            localStorage.setItem("couponId", validCoupon.id);
            localStorage.setItem("discount", discount_amount);
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
                    <Button
                        onClick={handleApplyCoupon}
                        disabled={validatedOwn}
                        style={{ width: "30%" }}
                    >
                        Apply
                    </Button>
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
                </Row>
            </Form.Group>
        </Form>
    );
};

export default CouponForm;
