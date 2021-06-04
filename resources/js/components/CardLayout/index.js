import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { useHistory } from "react-router-dom";
import "../../../css/CardLayout.css";

const CardLayout = ({ data, parent }) => {
    var history = useHistory();

    return (
        <Col>
            <Row className="cardLayout">
                {data &&
                    data.map(({ id, title, description, thumbnail }, index) => (
                        <div
                            key={index}
                            className="col-md-4 col-sm-6"
                            style={{ padding: 0 }}
                        >
                            <Card
                                onClick={() =>
                                    (window.location = `/${parent}/${title
                                        .toLowerCase()
                                        .split(" ")
                                        .join("-")}-${id}`)
                                }
                                className="contentCard"
                            >
                                <Card.Img
                                    variant="top"
                                    className="cardImg"
                                    src={`\\storage\\${thumbnail}`}
                                />
                                <Card.Body
                                    className="cardBody"
                                    style={{
                                        background: "#f1f1f1",
                                        padding: "10px 20px"
                                    }}
                                >
                                    <Card.Title
                                        style={{
                                            fontSize: 22,
                                            marginBottom: 15
                                        }}
                                    >
                                        {title}
                                    </Card.Title>
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
                                    <Button
                                        variant="primary"
                                        className="actionBtn"
                                    >
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
            </Row>
        </Col>
    );
};

export default CardLayout;
