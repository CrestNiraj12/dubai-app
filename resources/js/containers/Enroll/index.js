import React, { useState, useEffect, Fragment } from "react";
import {
    Col,
    Container,
    Form,
    Row,
    Button,
    Spinner,
    Modal
} from "react-bootstrap";
import BscImage from "../../../images/bsc.jpg";
import "../../../css/Enroll.css";
import Payment from "../Payment";

const Enroll = () => {
    const course = {
        id: 1,
        title: "Bsc (Hons) Computing",
        description:
            "<p>The BSc (Hons) Computing Programme at The British College is run in partnership with Leeds Beckett University, UK. Students studying this course will gain highly sought-after skills in computer programming, database development, networking, website development, systems modelling, and computer security. This course is equivalent to BSc CSIT and BIT in Nepal.</p><p>These are vital skills for gaining entry into organisations which demand confident and technically equipped computing graduates.</p><p>Students will have the opportunity to work on real-world projects, focusing on specialist areas of their choice, including web technology, network and communications, database or software development.</p>",
        image: BscImage,
        yearly_fee: 12527.6,
        uni_fee: 900
    };
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
    const [payment, setPayment] = useState(false);
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState(initialData);
    const [invalidDatas, setInvalidDatas] = useState(initialData);
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
            setPayment(true);
        } else setValidated(false);
    };

    return (
        <>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <>
                    <Fragment>
                        <Modal show={payment} onHide={() => setPayment(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Choose a payment method
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {" "}
                                <Payment course={course} />
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
                                    <Button onClick={handleSubmit}>
                                        Submit
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
