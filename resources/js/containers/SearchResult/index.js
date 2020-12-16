import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import qs from "query-string";
import { Link } from "react-router-dom";
import CoursesCardLayout from "../../components/CoursesCardLayout";

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
                <Spinner
                    animation="border"
                    role="status"
                    className="pageLoader"
                >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Container>
                    <Row>
                        <Col>
                            <p style={{ fontWeight: "bold" }}>
                                Search Results for '{query.q}'
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <CoursesCardLayout courses={result} />
                    </Row>
                </Container>
            )}
        </>
    );
};

export default SearchResult;
