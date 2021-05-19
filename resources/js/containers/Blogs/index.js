import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "../../../css/Page.css";
import CardLayout from "../../components/CardLayout";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const Blogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
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
                        <Jumbotron>
                            <h1>TWI Blog</h1>
                            <p>
                                Discover posts from The Woolwich Institute
                                including various updates, stories about our
                                people and reports.
                            </p>
                        </Jumbotron>
                        {blogs ? (
                            <Row>
                                <CardLayout data={blogs} parent="blogs" />
                            </Row>
                        ) : (
                            <h2>No blogs found!</h2>
                        )}
                    </Container>
                </Container>
            )}
        </>
    );
};

export default Blogs;
