import { Container } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from "../images/sliderImg.png";

function CustomSlide(props) {
  return (
    <div {...props} style={{ display: "flex", justifyContent: "center" }}>
      <img src={img} alt="" style={{ maxWidth: "180px" }} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      className={className}
      style={{
        color: "#000",
        background: "#fff",
        borderRadius: "50%",
        padding: "15px",
        fontSize: "45px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewRoundedIcon
      className={className}
      style={{
        color: "#000",
        background: "#fff",
        borderRadius: "50%",
        padding: "15px",
        fontSize: "45px",
      }}
      onClick={onClick}
    />
  );
}

function SliderPart() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container maxWidth="sm">
      <Slider {...settings}>
        <CustomSlide />
        <CustomSlide />
        <CustomSlide />
      </Slider>
    </Container>
  );
}
export default SliderPart;
