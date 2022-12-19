import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader';
import SectionHeadingDesc from '../SectionHeadingDesc/SectionHeadingDesc';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

import './PartnersPage.scss';
import "swiper/css";
import "swiper/css/pagination";

import PartnerLogo1 from '../../img/partner-logo1.png';
import PartnerLogo2 from '../../img/partner-logo2.png';
import PartnerLogo3 from '../../img/partner-logo3.png';
import PartnerLogo4 from '../../img/partner-logo4.png';
import PartnerLogo5 from '../../img/partner-logo5.png';

function PartnersPage() {
    return (
        <div className='partner_page'>
            <InnerHeader
                HeaderHeading="Partners"
                PageText="Partners"
            />
            <div className='partner_main'>
                <div className='container'>
                    <SectionHeadingDesc
                        Heading="Our Partners"
                        Desc="The sources of ideas for software products are plentiful. These ideas can come from market research."
                    />
                    <div className='swiper_main'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={24}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                575: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                            className="mySwiper logo_swiper"
                        >
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo1} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo2} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo3} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo4} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo5} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo1} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo2} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo3} alt='img' />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link className='logo_otr'>
                                    <img className='logo_img' src={PartnerLogo4} alt='img' />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersPage