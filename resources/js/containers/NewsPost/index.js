import React, { useState, useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import "../../../css/Page.css";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const NewsPost = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState({
        id: "",
        title: "",
        description: "",
        content: "",
        thumbnail: "",
        keywords: "",
        meta_description: "",
        featured: "",
        tags: ""
    });

    useEffect(() => {
        axios
            .get(`/api/news/${match.params.id}`)
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
                <Container className="page-content">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/news">News</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {news ? news.title : ""}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Row className="page-title">
                            <h1>{news.title}</h1>
                        </Row>
                        <Row>
                            <Col md={12} style={{ paddingLeft: 0 }}>
                                <Row style={{ marginBottom: 35 }}>
                                    <img
                                        src={`\\storage\\${news.thumbnail}`}
                                        width={"100%"}
                                        className="page-thumbnail"
                                        alt={news.title}
                                    />
                                </Row>
                                <Row>
                                    <Col
                                        style={{ padding: 0 }}
                                        dangerouslySetInnerHTML={{
                                            __html: news.content
                                        }}
                                    ></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default NewsPost;
