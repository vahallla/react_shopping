import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "../css/banner.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <section className="banner mw">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="__inner"
      >
        <SwiperSlide>
          <div style={{ backgroundImage: "url('/img/Img_bg1.jpg')" }}>
            <p>이벤트 명</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: "url('/img/Img_bg2.jpg')" }}>
            <p>이벤트 명</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: "url('/img/Img_bg3.jpg')" }}>
            <p>이벤트 명</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
