import React from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import SectionHeadingDesc from "../SectionHeadingDesc/SectionHeadingDesc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import "./PartnersPage.scss";
import "swiper/css";
import "swiper/css/pagination";

import PartnerLogo1 from "../../img/partner-logo1.png";
import PartnerLogo2 from "../../img/partner-logo2.png";
import PartnerLogo3 from "../../img/partner-logo3.png";
import PartnerLogo4 from "../../img/partner-logo4.png";
import PartnerLogo5 from "../../img/partner-logo5.png";

import "./../ContactSection/ContactSection";

import TextImg from "../../img/funtler-text-img.svg";
import Input from "../Input/Input";

function PartnersPage() {
  return (
    <div className="partner_page">
      <InnerHeader HeaderHeading="Bli en partner" PageText="Bli en partner" />
      {/* //todo: replace with the new become partner page. currently replacing it temporarily until we have the new page. */}
      {/* <div className='partner_main'>
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
            </div> */}
      <section className="Contact_main">
        <div className="container p-5">
          <div className="row row_custom">
            <div className="col-lg-6 col_content_otr margin-temp">
              <div className="col_content_inr">
                <h2 className="heading-h22">Hvorfor velge funtlers</h2>
                <p className="heading-m desc">
                  Funtler sitt mål er å være en ledende sosial markedsplass for
                  alle, som tilbyr fysiske og digitale aktiviteter i hele
                  Norden/norge/velg. Hvorfor samarbeide med Funtler? Unik
                  eksponeringsmulighet Koble virksomheten din opp mot bredt
                  publikum i hele Norge Maksimere antall bookinger månedlig Vær
                  endel av vårt unike utvalg av sosiale aktiviteter Trofaste og
                  tilbakevendende kunder Er dette interessant? Fyll ut følgende
                  skjema også tar vi kontakt med deg for en uforpliktende prat.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col_form_otr">
              <form className="col_form_inr">
                <div className="input_otr">
                  <Input
                    InputClass="Theme_input_white"
                    Inputype="name"
                    InputName="name"
                    InputPlaceholder="Grunn til samarbeid"
                  />
                </div>
                <div className="input_otr">
                  <Input
                    InputClass="Theme_input_white"
                    Inputype="email"
                    InputName="email"
                    InputPlaceholder="Bedriftsnavn"
                  />
                </div>

                <div className="input_otr">
                  <textarea
                    className="Theme_input_white Text_area"
                    placeholder="Kommentar"
                  />
                </div>
                <div className="action_otr">
                  <ThemeBtn
                    BtnClass="Theme_btn_primary send_btn"
                    BtnText="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
