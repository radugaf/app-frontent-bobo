import React from "react";
import Slider from "react-slick";
// import EmoticonIcon from "mdi-react/EmoticonIcon";
// import CrosshairsGpsIcon from "mdi-react/CrosshairsGpsIcon";
import Panel from "../../../shared/components/Panel";

import SliderPhoto from "../../../scss/images/slider_photo.jpeg";
import SliderPhoto2 from "../../../scss/images/slider_photo2.jpeg";
import SliderPhoto3 from "../../../scss/images/slider_photo3.jpeg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 1 } },
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 1536, settings: { slidesToShow: 1 } },
    { breakpoint: 100000, settings: { slidesToShow: 2 } },
  ],
};

const cardHeader = <h3><strong>Suntem aici pentru tine!</strong></h3>

const ShortReminders = () => {
  return (
    <Panel md={12} lg={6} >
      
      <Slider {...settings} className="dashboard__carousel">
        <img src={SliderPhoto3} alt={SliderPhoto3} />
        <img src={SliderPhoto3} alt={SliderPhoto3} />
        <img src={SliderPhoto3} alt={SliderPhoto3} />
      </Slider>
    </Panel>
  );
};

export default ShortReminders;
