import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../../../css/Page.css";
import CardLayout from "../../components/CardLayout";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const Blogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/api/blogs")
            .then(res => {
                setBlogs(res.data);
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
                            All Posts
                        </h1>
                        {blogs && blogs.length > 0 ? (
                            <Row>
                                <CardLayout data={blogs} parent="blog" />
                            </Row>
                        ) : (
                            <h2>No posts found!</h2>
                        )}
                    </Container>
                </Container>
            )}
        </>
    );
};

export default Blogs;
