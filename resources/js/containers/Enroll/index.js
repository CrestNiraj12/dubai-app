import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import "../../../css/Enroll.css";

const Enroll = () => {
    const initialData = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        dob: "",
        qualification: "",
        gpa: "",
        school: "",
        address: ""
    };
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState(initialData);
    const [invalidDatas, setInvalidDatas] = useState(initialData);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value });

    const validateData = () => {
        let errors = {};
        let isValid = true;
        var pattern;

        if (!loggedIn) {
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
        }

        if (!data["address"]) {
            isValid = false;
            errors["address"] = "Please enter your current address.";
        }

        if (!data["qualification"]) {
            isValid = false;
            errors["address"] = "Please enter your qualification.";
        }

        if (!data["gpa"]) {
            isValid = false;
            errors["address"] = "Please enter your GPA.";
        }

        if (!data["gpa"]) {
            isValid = false;
            errors["address"] = "Please enter your previous school/college.";
        }

        if (!data["dob"]) {
            isValid = false;
            errors["password"] = "Please enter your date of birth.";
        }

        setInvalidDatas(errors);

        return isValid;
    };

    return (
        <>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Container className="enroll">
                    <Row>
                        <Col>
                            <h2>Please fill up the enrollment form</h2>
                            <Form noValidate validated={validated}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            name="firstname"
                                            type="text"
                                            value={data.firstname}
                                            isInvalid={!!invalidDatas.firstname}
                                            onChange={handleChange}
                                            size="sm"
                                            disabled={loggedIn}
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
                                            isInvalid={!!invalidDatas.lastname}
                                            type="text"
                                            disabled={loggedIn}
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
                                        disabled={loggedIn}
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
                                        disabled={loggedIn}
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
                                        isInvalid={!!invalidDatas.qualification}
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
                                        type="text"
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
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default Enroll;
