import React, { useState, useEffect } from "react";
import { Card, Button, Row, Spinner } from "react-bootstrap";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { useHistory, Link } from "react-router-dom";
import "../../../css/CardLayout.css";

const CoursesCardLayout = ({ courses }) => {
    var history = useHistory();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <Spinner
                    animation="border"
                    role="status"
                    className="pageLoader"
                >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <>
                    {courses.length > 0 ? (
                        <Row className="cardLayout">
                            {courses.map(
                                ({ id, title, description, image }, index) => (
                                    <div
                                        key={index}
                                        className="col-md-4 col-xs-6"
                                    >
                                        <Card
                                            onClick={() =>
                                                history.push(`/course/${id}`)
                                            }
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
                                                        maxLine="3"
                                                        ellipsis="..."
                                                        basedOn="letters"
                                                    />
                                                </Card.Text>
                                                <Button variant="primary">
                                                    Learn More
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            )}
                        </Row>
                    ) : (
                        <h1 style={{ padding: "15px" }}>
                            No courses found!{" "}
                            <small>
                                <Link to="/">Go Home</Link>
                            </small>
                        </h1>
                    )}
                </>
            )}
        </>
    );
};

export default CoursesCardLayout;
