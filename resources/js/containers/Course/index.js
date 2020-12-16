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
import Sticky from "react-sticky-el";
import { useHistory } from "react-router-dom";
import { AMOUNT } from "../../constants";
import "../../../css/Course.css";
import CouponForm from "../../components/CouponForm";

const Course = ({ match }) => {
    var history = useHistory();
    const [discountedPrice, setDiscountedPrice] = useState(null);
    const [validated, setValidated] = useState("");
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState({
        id: "",
        title: "",
        description: "",
        facts: "",
        image: "",
        requirements: "",
        uni_fee: "",
        yearly_fee: ""
    });

    useEffect(() => {
        axios
            .get(`/api/courses/${match.params.id}`)
            .then(res => setCourse(res.data))
            .catch(err => console.log(err));
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
                                        src={`\\storage\\${course.image}`}
                                        width={"100%"}
                                        style={{
                                            height: "500px",
                                            objectFit: "cover"
                                        }}
                                        alt={course.title}
                                    />
                                </Row>
                                <Row style={{ marginTop: "30px" }}>
                                    <h4>Course Details</h4>
                                </Row>
                                <Row
                                    dangerouslySetInnerHTML={{
                                        __html: course.description
                                    }}
                                ></Row>
                            </Col>
                            <Col
                                md={4}
                                style={{ paddingRight: 0, paddingLeft: "30px" }}
                            >
                                <Row>
                                    <Card className="cardWidth">
                                        <Card.Header className="text-center">
                                            Key Facts
                                        </Card.Header>
                                        <Card.Body
                                            dangerouslySetInnerHTML={{
                                                __html: course.facts
                                            }}
                                        ></Card.Body>
                                    </Card>
                                </Row>
                                <Row style={{ marginTop: "20px" }}>
                                    <Card className="cardWidth">
                                        <Card.Header className="text-center">
                                            Requirements
                                        </Card.Header>
                                        <Card.Body
                                            dangerouslySetInnerHTML={{
                                                __html: course.requirements
                                            }}
                                        ></Card.Body>
                                    </Card>
                                </Row>
                                <Row style={{ marginTop: "20px" }}>
                                    <Sticky>
                                        <Card className="cardWidth">
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
                                                        year)
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
