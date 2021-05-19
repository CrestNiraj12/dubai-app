import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "../../../css/Page.css";
import CardLayout from "../../components/CardLayout";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const News = () => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get("/api/news")
            .then(res => {
                setNews(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {loading ? (
                <PageLoadSpinner />
            ) : (
                <Container fluid style={{ padding: 0 }}>
                    <Container className="page-container">
                        <Jumbotron>
                            <h1>Latest News</h1>
                            <p>
                                Get the latest news regarding The Woolwich
                                Institute.
                            </p>
                        </Jumbotron>
                        {news ? (
                            <Row>
                                <CardLayout data={news} parent="news" />
                            </Row>
                        ) : (
                            <h2>No news found!</h2>
                        )}
                    </Container>
                </Container>
            )}
        </>
    );
};

export default News;
