import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Breadcrumb,
    Button,
    Card,
    Table,
    Spinner,
    Form
} from "react-bootstrap";
import BscImage from "../../../images/bsc.jpg";
import Sticky from "react-sticky-el";
import { useHistory } from "react-router-dom";
import { AMOUNT } from "../../constants";
import "../../../css/Course.css";
import CouponForm from "../../components/CouponForm";

const Course = ({ match }) => {
    var history = useHistory();
    const course = {
        id: 1,
        title: "Bsc (Hons) Computing",
        description:
            "<p>The BSc (Hons) Computing Programme at The British College is run in partnership with Leeds Beckett University, UK. Students studying this course will gain highly sought-after skills in computer programming, database development, networking, website development, systems modelling, and computer security. This course is equivalent to BSc CSIT and BIT in Nepal.</p><p>These are vital skills for gaining entry into organisations which demand confident and technically equipped computing graduates.</p><p>Students will have the opportunity to work on real-world projects, focusing on specialist areas of their choice, including web technology, network and communications, database or software development.</p>",
        image: BscImage,
        yearly_fee: 12527.6,
        uni_fee: 900
    };

    const [discountedPrice, setDiscountedPrice] = useState(null);
    const [validated, setValidated] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Bsc (Hons) Computing
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Row style={{ margin: "30px 0" }}>
                            <h1>{course.title}</h1>
                        </Row>
                        <Row>
                            <Col md={8} style={{ paddingLeft: 0 }}>
                                <Row>
                                    <img
                                        src={course.image}
                                        width={"100%"}
                                        alt={course.title}
                                    />
                                </Row>
                                <Row style={{ marginTop: "30px" }}>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: course.description
                                        }}
                                    ></p>
                                </Row>
                                <Row>
                                    <h4>Course Details</h4>
                                    <p>
                                        The degree programme is comprised of a
                                        one year Foundation Year provided by The
                                        British College followed by a three-year
                                        degree validated by Leeds Beckett
                                        University.
                                    </p>
                                    <b>What is Year 0 or Level 3?</b>
                                    <p>
                                        Year 0 in The British College is a
                                        Foundation Year (Certificate to be
                                        awarded by The British College) that is
                                        designed to help students progress into
                                        BSc (Hons) Computing degree. The aim of
                                        this year is to: assist students to
                                        adapt to the UK style of learning,
                                        improve students' English ability, and
                                        introduce the necessary skills required
                                        for higher education.
                                    </p>
                                    <p>
                                        Year 0 or Level 3 consists of 8 modules.
                                    </p>
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Semester 1</th>
                                                <th colSpan={2}>Semester 2</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Academic English & Study
                                                    skills
                                                </td>
                                                <td>15 credits</td>
                                                <td>
                                                    Fundamentals of Multimedia
                                                </td>
                                                <td>15 credits</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Fundamentals of Data Science
                                                </td>
                                                <td>15 credits</td>
                                                <td>
                                                    Object-Oriented Programming
                                                </td>
                                                <td>15 credits</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Introduction to Programming
                                                </td>
                                                <td>15 credits</td>
                                                <td>
                                                    Mathematics for Computing
                                                </td>
                                                <td>15 credits</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Computer Fundamentals and
                                                    Network
                                                </td>
                                                <td>15 credits</td>
                                                <td>Internet Technologies</td>
                                                <td>15 credits</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <p>
                                        After the Foundation Year, students will
                                        be registered with Leeds Beckett
                                        University, the programme can be
                                        completed entirely in Kathmandu,
                                        however, transfers to Leeds are also
                                        possible for interested students.{" "}
                                    </p>
                                    <p>
                                        Year 1 or Level 4 consists of 6 core
                                        modules totalling 120 credits
                                    </p>
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Semester 1</th>
                                                <th colSpan={2}>Semester 2</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Academic English & Study
                                                    skills
                                                </td>
                                                <td>15 credits</td>
                                                <td>
                                                    Fundamentals of Multimedia
                                                </td>
                                                <td>15 credits</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Fundamentals of Data Science
                                                </td>
                                                <td>15 credits</td>
                                                <td>
                                                    Object-Oriented Programming
                                                </td>
                                                <td>15 credits</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Introduction to Programming
                                                </td>
                                                <td>15 credits</td>
                                                <td>
                                                    Mathematics for Computing
                                                </td>
                                                <td>15 credits</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Computer Fundamentals and
                                                    Network
                                                </td>
                                                <td>15 credits</td>
                                                <td>Internet Technologies</td>
                                                <td>15 credits</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Row>
                            </Col>
                            <Col
                                md={4}
                                style={{ paddingRight: 0, paddingLeft: "30px" }}
                            >
                                <Row>
                                    <Card>
                                        <Card.Header className="text-center">
                                            <h5>Key Facts</h5>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul>
                                                <li>
                                                    UK standard teaching rooms
                                                    (See 3D Tour)
                                                </li>
                                                <li>
                                                    State-of-the-art computer
                                                    labs (Open access Computer
                                                    lab, Computer forensic &
                                                    security lab)
                                                </li>
                                                <li>
                                                    Highly qualified teachers
                                                    and engineers
                                                </li>
                                                <li>
                                                    Modern library with access
                                                    to international course
                                                    books, journals and other
                                                    printed material
                                                </li>
                                                <li>
                                                    Virtual Learning Environment
                                                    (VLE)
                                                </li>
                                                <li>
                                                    A subscription to
                                                    Microsoft's Developer
                                                    Network (MSDN)
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row style={{ marginTop: "20px" }}>
                                    <Card>
                                        <Card.Header className="text-center">
                                            Requirements
                                        </Card.Header>
                                        <Card.Body>
                                            <h6> Foundation Entry</h6>
                                            <ul>
                                                <li>
                                                    10+2/CBSE or equivalent 55%
                                                    and above aggregate score
                                                </li>
                                                <li>
                                                    A Level - Minimum 3.5
                                                    credits with 3 full credits
                                                </li>
                                            </ul>
                                            <h6>University Entry</h6>
                                            <ul>
                                                <li>
                                                    Overall 75% & above with a
                                                    minimum of 70% in English or
                                                    IELTS Score of 6.0 with no
                                                    less than 5.5 in any band.
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row style={{ marginTop: "20px" }}>
                                    <Sticky>
                                        <Card style={{ width: "375px" }}>
                                            <Card.Header className="text-center">
                                                Course Price
                                            </Card.Header>
                                            <Card.Body>
                                                <p className="text-primary">
                                                    <span
                                                        className="courseAmount"
                                                        style={{
                                                            fontSize: validated
                                                                ? "15px"
                                                                : "25px",
                                                            textDecoration: validated
                                                                ? "line-through"
                                                                : "none",
                                                            color: validated
                                                                ? "#e43333"
                                                                : "inherit"
                                                        }}
                                                    >
                                                        {(
                                                            course.yearly_fee *
                                                            4
                                                        ).toLocaleString(
                                                            undefined,
                                                            {
                                                                maximumFractionDigits: 2
                                                            }
                                                        ) +
                                                            " " +
                                                            AMOUNT}
                                                    </span>
                                                    {validated && (
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "25px",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {discountedPrice.toLocaleString(
                                                                undefined,
                                                                {
                                                                    maximumFractionDigits: 2
                                                                }
                                                            ) +
                                                                " " +
                                                                AMOUNT}
                                                        </span>
                                                    )}
                                                    <span
                                                        style={{
                                                            display: "block"
                                                        }}
                                                    >
                                                        + £{course.uni_fee} x 3
                                                        (university fee for each
                                                        year paid)
                                                    </span>
                                                </p>
                                                <small>
                                                    <i>
                                                        Note: University fee is
                                                        paid at the end of each
                                                        year separately in L4,
                                                        L5 and L6 and is not
                                                        included while paying
                                                        the fee in the website
                                                    </i>
                                                </small>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            padding: 0,
                                                            marginTop: "20px"
                                                        }}
                                                    >
                                                        <CouponForm
                                                            course={course}
                                                            setDiscountedPrice={
                                                                setDiscountedPrice
                                                            }
                                                            setValidated={
                                                                setValidated
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                                <Card.Text>
                                                    If you are eligible, what
                                                    are you waiting for?
                                                </Card.Text>
                                            </Card.Body>
                                            <Button
                                                onClick={() =>
                                                    history.push(
                                                        `/course/${match.params.id}/enroll`
                                                    )
                                                }
                                            >
                                                Enroll Now
                                            </Button>
                                        </Card>
                                    </Sticky>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default Course;
