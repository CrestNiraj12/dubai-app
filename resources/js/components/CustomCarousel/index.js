import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
    ArrowLeftCircleFill,
    ArrowRightCircleFill
} from "react-bootstrap-icons";
import axios from "axios";

const Carousel = () => {
    const [images, setImages] = useState([]);
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

    useEffect(() => {
        axios
            .get("/api/images")
            .then(res => setImages(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Slider {...settings} style={{ overflow: "hidden" }}>
            {images.map(({ image }, index) => (
                <div key={index}>
                    <img src={`/storage/${image}`} className="sliderImage" />
                </div>
            ))}
        </Slider>
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

export default Carousel;
