import { Link } from "react-router-dom";
import Input from '../Input/Input'
import Select from '../Select/Select'
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
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
import FetchService from '../../api/FetchService';

function Hero() {
    const navigate = useNavigate();

    const GotoActivity = async (activityData) => {
        navigate('/activities');

    }
    const [activities, setActivities] = useState([])

    const fetchData = () => {
        let ownerid = 1;
        let apicall = FetchService.getAllActivities(ownerid);

        apicall
            .then(response => {

                return response.data
            })
            .then(data => {

                // data.data=[{"id":1,"name":"string","price":0,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":true,"ownerID":1,"activityType":"string"},{"id":2,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null},{"id":3,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null}];
                setActivities(data)

            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <section className='hero_header'>
                <div className='Hero_main'>
                    <div className='container'>
                        <div className='row row_custom'>
                            <div className='col-lg-7 col_content_otr'>
                                <div className="col_team_building_otr">
                                    <div className='col_team_building_inr'>
                                        <h3 className='heading-h3 heading'>
                                            Makes teambuilding funtlier
                                        </h3>
                                        <div className='search_otr'>
                                            <Input
                                                InputPlaceholder="Vet du hvilken aktivitet du vil gjøre"
                                                InputName="search"
                                                Inputype="search"
                                                InputClass="Theme_input_white search_input"
                                            />
                                            <div className='search_icon_otr'>
                                                <i class="ri-search-2-line search_icon" onClick={() => { GotoActivity() }} ></i>
                                            </div>
                                        </div>
                                        <div className='activity_main'>
                                            <ul className='activity_ul'>
                                                <li className='activity_li'>
                                                    <Select
                                                        defaultText="Fysisk"
                                                    />
                                                </li>
                                                <li className='activity_li'>
                                                    <Select
                                                        defaultText="Antall"
                                                    />
                                                </li>
                                                <li className='activity_li'>
                                                    <Select
                                                        defaultText="Budsjett"
                                                    />
                                                </li>
                                                <li className='activity_li'>
                                                    <Select
                                                        defaultText="Anledning"
                                                    />
                                                </li>
                                            </ul>
                                            <div className='filter_otr'>
                                                <Select
                                                    defaultText="Flere filtere"
                                                />
                                            </div>
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