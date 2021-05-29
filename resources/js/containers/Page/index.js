import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../css/CustomPage.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const Page = ({
    match: {
        params: { slug }
    }
}) => {
    const [pageDetails, setPageDetails] = useState({
        title: "",
        slug: "",
        image: "",
        description: "",
        content: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/api/pages/${slug}`)
            .then(res => {
                setPageDetails(res.data);
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
                    <Container className="custom-page-container">
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    backgroundImage: `url(/storage/${pageDetails.image.replace(
                                        /\\/g,
                                        "/"
                                    )})`,
                                    padding: "5% 8%",
                                    margin: 0,
                                    height: 400,
                                    filter: "blur(1.5px)",
                                    backgroundSize: "cover",
                                    backgroundPositionY: "center"
                                }}
                            ></div>
                            <div
                                style={{
                                    position: "absolute",
                                    left: "8%",
                                    bottom: 40,
                                    color: "#fff",
                                    background: "#1f3860eb",
                                    padding: "30px 40px"
                                }}
                            >
                                <h1>{pageDetails.title}</h1>
                                <p>{pageDetails.description}</p>
                            </div>
                        </div>
                        <Row>
                            <Col className="custom-page-content">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: pageDetails.content
                                    }}
                                ></div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            )}
        </>
    );
};

export default Page;
