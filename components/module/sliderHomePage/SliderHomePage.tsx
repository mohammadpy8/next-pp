"use client";

import type { FC } from "react";
import Image from "next/image";
import SliderCustom from "./style";
import { ShapeSvg } from "@/public/svg";

const SliderHomePage: FC = () => {
  var settings = {
    dots: true,
    rtl: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb"
  };

  return (
    <div className="flex relative">
      <SliderCustom {...settings}>
        <div>
          <Image
            src="/image/10.jpeg"
            alt="10"
            width={500}
            height={250}
            className="w-fullS h-[250px] "
          />
        </div>

        <div>
          <Image
            src="/image/11.jpg"
            alt="10"
            width={500}
            height={250}
            className="w-fullS h-[250px] "
          />
        </div>

        <div>
          <Image
            src="/image/12.WEBP"
            alt="10"
            width={500}
            height={250}
            className="w-fullS h-[250px] "
          />
        </div>

        <div>
          <Image
            src="/image/13.jpg"
            alt="10"
            width={500}
            height={250}
            className="w-fullS h-[250px] "
          />
        </div>
      </SliderCustom>
      <div className="absolute bottom-[7px] right-[200px]">
        <ShapeSvg />
      </div>
    </div>
  );
};

export { SliderHomePage };
