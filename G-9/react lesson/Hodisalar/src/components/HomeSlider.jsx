import React, { useContext } from "react";
import Slider from "react-slick";
import { Datas } from "../context/Context";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function HomeSlider() {
    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="next_btn">
                <button onClick={onClick}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        );
    };
    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="prev_btn">
                <button onClick={onClick}>
                    <ArrowBackIosIcon />
                </button>
            </div>
        );
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 15000,
        autoplaySpeed: 15000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const { products } = useContext(Datas);
    return (
        <Slider {...settings}>
            {products.slice(5, 10).map((c) => {
                return (
                    <div key={c.id} className="home_slider">
                        <figure>
                            <img src={c.thumbnail} alt={c.title} />
                            <h1 className="title">{c.title}</h1>
                        </figure>
                    </div>
                );
            })}
        </Slider>
    );
}

export default HomeSlider;
