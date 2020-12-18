import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "../../../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursesCardLayout from "../../components/CoursesCardLayout";
import PageLoadSpinner from "../../components/PageLoadSpinner";
import CustomCarousel from "../../components/CustomCarousel";

const Home = ({ courses }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    });

    return (
        <>
            {loading ? (
                <PageLoadSpinner />
            ) : (
                <Container fluid style={{ padding: 0 }}>
                    <CustomCarousel />
                    <Container className="home-container">
                        <Jumbotron>
                            <h1>Welcome!</h1>
                            <p>
                                Browse through our reputed courses and get a
                                degree recognized all over Europe with a high
                                chance of job placements.
                            </p>
                        </Jumbotron>

                        <Row>
                            <CoursesCardLayout courses={courses} />
                        </Row>
                    </Container>
                </Container>
            )}
        </>
    );
};

export default Home;
