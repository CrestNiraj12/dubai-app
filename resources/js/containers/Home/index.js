import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row, Spinner } from "react-bootstrap";
import "../../../css/Home.css";
import Slider from "react-slick";
import BscImage from "../../../images/bsc.jpg";
import BbaImage from "../../../images/bba.jpg";
import ACCAImage from "../../../images/acca.jpg";
import {
    ArrowLeftCircleFill,
    ArrowRightCircleFill
} from "react-bootstrap-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursesCardLayout from "../../components/CoursesCardLayout";

const Home = ({ courses }) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    });

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
                <Container fluid style={{ padding: 0 }}>
                    <Slider {...settings} style={{ overflow: "hidden" }}>
                        <div>
                            <img src={BscImage} className="sliderImage" />
                        </div>
                        <div>
                            <img src={BbaImage} className="sliderImage" />
                        </div>
                        <div>
                            <img src={ACCAImage} className="sliderImage" />
                        </div>
                    </Slider>
                    <Container>
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

const PrevArrow = props => {
    const { onClick } = props;
    return (
        <ArrowLeftCircleFill
            className="slideButton prevButton"
            onClick={onClick}
        />
    );
};

const NextArrow = props => {
    const { onClick } = props;
    return (
        <ArrowRightCircleFill
            className="slideButton nextButton"
            onClick={onClick}
        />
    );
};

export default Home;
