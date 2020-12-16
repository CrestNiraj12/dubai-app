import React, { useEffect, useState } from "react";
import {
    Container,
    Jumbotron,
    Card,
    Row,
    CardColumns,
    Button,
    Spinner
} from "react-bootstrap";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { useHistory } from "react-router-dom";
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

const Home = ({ courses }) => {
    var history = useHistory();
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

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
                            <CardColumns
                                style={{
                                    widows: "2",
                                    orphans: "2"
                                }}
                            >
                                {courses.map(
                                    (
                                        { id, title, description, image },
                                        index
                                    ) => (
                                        <Card
                                            key={index}
                                            onClick={() =>
                                                history.push(`/course/${id}`)
                                            }
                                            className="courseCard"
                                        >
                                            <Card.Img
                                                variant="top"
                                                className="cardImg"
                                                src={`\\storage\\${image}`}
                                            />
                                            <Card.Body className="cardBody">
                                                <Card.Title>{title}</Card.Title>
                                                <Card.Text as="div">
                                                    <HTMLEllipsis
                                                        unsafeHTML={description}
                                                        maxLine="3"
                                                        ellipsis="..."
                                                        basedOn="letters"
                                                    />
                                                </Card.Text>
                                                <Button variant="primary">
                                                    Learn More
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                )}
                            </CardColumns>
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
