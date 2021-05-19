import React, { useState, useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import "../../../css/Page.css";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const Blog = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({
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
            .get(`/api/blogs/${match.params.id}`)
            .then(res => {
                setBlog(res.data);
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
                        <Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {blog ? blog.title : ""}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Row className="page-title">
                            <h1>{blog.title}</h1>
                        </Row>
                        <Row>
                            <Col md={12} style={{ paddingLeft: 0 }}>
                                <Row style={{ marginBottom: 35 }}>
                                    <img
                                        src={`\\storage\\${blog.thumbnail}`}
                                        width={"100%"}
                                        className="page-thumbnail"
                                        alt={blog.title}
                                    />
                                </Row>
                                <Row>
                                    <Col
                                        style={{ padding: 0 }}
                                        dangerouslySetInnerHTML={{
                                            __html: blog.content
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

export default Blog;
