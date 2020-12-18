import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { useHistory } from "react-router-dom";
import "../../../css/CardLayout.css";

const CoursesCardLayout = ({ courses }) => {
    var history = useHistory();

    return (
        <Col>
            <Row className="cardLayout">
                {courses.map(({ id, title, description, image }, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                        <Card
                            onClick={() => history.push(`/course/${id}`)}
                            className="courseCard"
                        >
                            <Card.Img
                                variant="top"
                                className="cardImg"
                                src={`\\storage\\${image}`}
                            />
                            <Card.Body className="cardBody">
                                <Card.Title>{title}</Card.Title>
                                <Card.Text as="div">
                                    <HTMLEllipsis
                                        unsafeHTML={description}
                                        maxLine={
                                            window.innerWidth < 600 ? 2 : 3
                                        }
                                        ellipsis="..."
                                        basedOn="letters"
                                    />
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>
        </Col>
    );
};

export default CoursesCardLayout;
