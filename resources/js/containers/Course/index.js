import React from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import BscImage from "../../../images/bsc.jpg";

const Course = ({ match, courses }) => {
    const course = {
        id: 1,
        title: "Bsc (Hons) Computing",
        description:
            "The BSc (Hons) Computing Programme at The British College is run in partnership with Leeds Beckett University, UK. Students studying this course will gain highly sought-after skills in computer programming, database development, networking, website development, systems modelling, and computer security. This course is equivalent to BSc CSIT and BIT in Nepal. ",
        image: BscImage
    };

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Bsc (Hons) Computing</Breadcrumb.Item>
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
                        <Row>
                            <p>{course.description}</p>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <p>You can enroll now</p>
                            <Button>Enroll Now</Button>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default Course;
