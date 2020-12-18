import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import qs from "query-string";
import CoursesCardLayout from "../../components/CoursesCardLayout";
import PageLoadSpinner from "../../components/PageLoadSpinner";
import { Link } from "react-router-dom";

const SearchResult = ({ location, courses }) => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

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
                <PageLoadSpinner />
            ) : (
                <Container>
                    <Row>
                        <Col>
                            <p
                                style={{
                                    fontWeight: "bold",
                                    marginTop: "5%",
                                    fontSize: "18px"
                                }}
                            >
                                Search Results for '{query.q}'
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {result.length > 0 ? (
                            <CoursesCardLayout courses={result} />
                        ) : (
                            <h1 style={{ padding: "15px" }}>
                                No courses found!{" "}
                                <small>
                                    <Link to="/">Go Home</Link>
                                </small>
                            </h1>
                        )}
                    </Row>
                </Container>
            )}
        </>
    );
};

export default SearchResult;
