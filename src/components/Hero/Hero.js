import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Select from "../Select/Select";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "./Hero.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroImg from "../../img/hero-img.png";
import HeroImg2 from "../../img/hero-img2.png";
import HeroImg3 from "../../img/hero-img3.png";
import HeroImg4 from "../../img/hero-img4.png";
import HeroImg5 from "../../img/hero-img5.png";

import SearchActivity from "../SearchActivity/SearchActivity";

function Hero() {
  return (
    <>
      <section className="hero_header">
        <div className="Hero_main">
          <div className="">
            <div className="row row_custom">
              <div className="col-lg-8 col_content_otr">
                <div className="col_team_building_otr">
                  <SearchActivity />
                </div>
              </div>
            </div>
          </div>
          <div className="hero_img_otr">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              effect={"fade"}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Pagination]}
              className="mySwiper hero_swiper"
            >
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg2} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg3} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg4} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_otr">
                  <img className="hero_img" src={HeroImg5} alt="img" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
