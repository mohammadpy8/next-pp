"use client";

import styled from "styled-components";
import Slider from "react-slick";

const SliderCustom = styled(Slider)(({ theme, as, forwardedAs,...rest }) => {
  console.log("rest==>",rest, theme, as, forwardedAs)
  return ({ 
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
    "& .slick-dots.slick-thumb": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    "& .slick-dots.slick-thumb li": {
      width: "6px",
      height: "6px",
      margin: "0 3px",
      borderRadius: "999px",
      transition: "all 0.5s ease-in-out",
      willChange: "width",
      backgroundColor: "black",
    },
    "& .slick-dots.slick-thumb li.slick-active": {
      backgroundColor: "#417F56",
      width: "24px",
    },
    "& .slick-dots": {
      display: "flex !important",
      position: "absolute",
      bottom: "15px",
      right: "217px",
      zIndex: 10,
    },
  })
});

export default SliderCustom;
