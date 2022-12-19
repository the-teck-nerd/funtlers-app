import React from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import SectionHeadingDesc from "../SectionHeadingDesc/SectionHeadingDesc";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import "./BookingConPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import ThemeBtn from "../ThemeBtn/ThemeBtn";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
function BookingConPage() {
  const location = useLocation();
  const activity = location.state?.activity;
  const peopleNumber = location.state?.peopleNumber;
  const user = location.state?.user;
  const activityImages = activity?.images ? JSON.parse(activity?.images) : [];

  return (
    <div className="BookingCon_Page">
      <InnerHeader
        HeaderHeading="Bookingbekreftelse"
        PageText="Bookingbekreftelse"
      />
      <div className="BookingCon_main">
        <div className="container">
          <SectionHeadingDesc
            Heading="Hurra! Nå er det bare å glede seg!"
            Desc={"Bookingbekreftelse er sendt på mail til " + user?.email}
          />
          <div className="row row_custom">
            <div className="col-lg-6 col_img_otr">
              <div className="col_img_inr ">
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
                  {activityImages.map((image) => (
                    <SwiperSlide>
                      <div className="img_otr">
                        <img
                          className="booking_conf_img"
                          src={image.imageURL}
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6 col_content_otr">
              <div className="col_content_inr">
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">
                    Aktivitet :{" "}
                  </span>{" "}
                  {activity?.name}
                </p>
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">
                    Gyldig Periode :{" "}
                  </span>{" "}
                  {formatDate(activity?.validPeriodStart)} {" - "}
                  {formatDate(activity?.validPeriodEnd)}
                </p>
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">
                    Activity Provide :{" "}
                  </span>{" "}
                  {activity?.partnerName}
                </p>
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">
                    Adresse :{" "}
                  </span>{" "}
                  {activity?.partnerAddress}
                </p>
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">Antall : </span>{" "}
                  {peopleNumber} personer
                </p>
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">
                    Inkludert :{" "}
                  </span>{" "}
                  Inngang, t-shirts, drikke
                </p>
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">Pris : </span>{" "}
                  {activity?.price}
                  {" NOK / Person "}
                </p>
                <p className="heading-l booking_text">
                  <span className="heading-lb booking_text_inr">
                    Totale Beløpet :{" "}
                  </span>{" "}
                  {activity?.price * peopleNumber} kr ink. mva
                </p>
                {/* 
                //Todo: partner social media */}
                {/* <ul className="social_ul">
                  <li className="social_li">
                    <Link className="social_a">
                      <i class="ri-facebook-circle-fill social_icon"></i>
                    </Link>
                  </li>
                  <li className="social_li">
                    <Link className="social_a">
                      <i class="ri-instagram-fill social_icon"></i>
                    </Link>
                  </li>
                  <li className="social_li">
                    <Link className="social_a">
                      <i class="ri-twitter-fill social_icon"></i>
                    </Link>
                  </li>
                  <li className="social_li">
                    <Link className="social_a">
                      <i class="ri-linkedin-fill social_icon"></i>
                    </Link>
                  </li>
                </ul> */}
                {/* <Link className="action_otr">
                  <ThemeBtn
                    BtnClass="Theme_btn_primary del_btn"
                    BtnText="Del"
                    onClick={() => {}}
                  />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConPage;
