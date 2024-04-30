"use client";

import styled from "styled-components";
import Slider from "react-slick";

const SliderCustom = styled(Slider)(() => ({
  "& .slick-initialized, & .slick-slider": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
  },
  "& .slick-list": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
  },
  "& .slick-track": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
  },
  "& .slick-arrow": {
    display: "none !important",
  },
  "& .slick-slide div div": {
    outline: "none",
  },
}));

export default SliderCustom;
