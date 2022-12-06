import React from 'react'
import { Link } from "react-router-dom";
import Input from '../Input/Input'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import './Hero.scss';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroImg from '../../img/hero-img.png';
import HeroImg2 from '../../img/hero-img2.png';
import HeroImg3 from '../../img/hero-img3.png';
import HeroImg4 from '../../img/hero-img4.png';
import HeroImg5 from '../../img/hero-img5.png';
import CircleText from '../../img/text-circle.svg';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function Hero() {
    return (
        <>
            <section className='hero_header'>
                <div className='Hero_main'>
                    <div className='container'>
                        <div className='row row_custom'>
                            <div className='col-lg-6 col_content_otr'>
                                {/* <div className='col_content_inr'>
                                    <h1 className='heading-h1 Heading hero_heading'>
                                        Velkommen til
                                        <span className='heading_inr'>
                                            Funtlers
                                            <img className='circle_text' src={CircleText} alt='img' />
                                        </span>
                                    </h1>
                                    <p className='desc heading-l'>
                                        Din markedsplass for sosiale aktiviteter
                                    </p>
                                    <div className='action_otr'>
                                        <Link>
                                            <ThemeBtn
                                                BtnClass='Theme_btn_white'
                                                BtnText='Read More'
                                            />
                                        </Link>
                                    </div>
                                </div> */}
                                <div className='col_content_inr'>
                                    <div className='search_otr'>
                                        <Input
                                            InputPlaceholder="Vet du hvilken aktivitet du vil gjøre"
                                            InputName="search"
                                            Inputype="search"
                                            InputClass="Theme_input_white search_input"
                                        />
                                        <div className='search_icon_otr'>
                                            <i class="ri-search-2-line search_icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hero_img_otr'>
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
                                <div className='img_otr'>
                                    <img className='hero_img' src={HeroImg} alt='img' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img_otr'>
                                    <img className='hero_img' src={HeroImg2} alt='img' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img_otr'>
                                    <img className='hero_img' src={HeroImg3} alt='img' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img_otr'>
                                    <img className='hero_img' src={HeroImg4} alt='img' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img_otr'>
                                    <img className='hero_img' src={HeroImg5} alt='img' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero