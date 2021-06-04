import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "../../../css/Page.css";
import CardLayout from "../../components/CardLayout";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const News = () => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        setLoading(true);
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
                        <h1 className="page-title" style={{ color: "#000" }}>
                            Recents
                        </h1>
                        {news && news.length > 0 ? (
                            <Row>
                                <CardLayout data={news} parent="news" />
                            </Row>
                        ) : (
                            <h4>No news available!</h4>
                        )}
                    </Container>
                </Container>
            )}
        </>
    );
};

export default News;
