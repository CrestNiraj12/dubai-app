import React, { useEffect, useState } from "react";
import {
    CardColumns,
    Col,
    Container,
    Row,
    Card,
    Button,
    Spinner
} from "react-bootstrap";
import qs from "query-string";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { Link, useHistory } from "react-router-dom";

const SearchResult = ({ location, courses }) => {
    var history = useHistory();
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        setQuery(qs.parse(location.search));
        setResult([
            ...courses.filter(({ title }) =>
                title
                    .toLowerCase()
                    .includes(qs.parse(location.search).q.toLowerCase())
            )
        ]);
        setLoading(false);
    }, [location, courses]);

    return (
        <>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Container>
                    <Row>
                        <Col style={{ padding: 0 }}>
                            <h6>Search Results for '{query.q}'</h6>
                        </Col>
                    </Row>
                    <Row>
                        {result.length >= 1 ? (
                            <CardColumns
                                style={{
                                    marginTop: "50px",
                                    widows: "2",
                                    orphans: "2"
                                }}
                            >
                                {result.map(
                                    (
                                        { id, title, description, image },
                                        index
                                    ) => (
                                        <Card
                                            key={index}
                                            onClick={() =>
                                                history.push(`/course/${id}`)
                                            }
                                            className="courseCard"
                                        >
                                            <Card.Img
                                                variant="top"
                                                className="cardImg"
                                                src={image}
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
                                    )
                                )}
                            </CardColumns>
                        ) : (
                            <h5>
                                No Results Found!{" "}
                                <small>
                                    <Link to="/">Go Home</Link>
                                </small>
                            </h5>
                        )}
                    </Row>
                </Container>
            )}
        </>
    );
};

export default SearchResult;
