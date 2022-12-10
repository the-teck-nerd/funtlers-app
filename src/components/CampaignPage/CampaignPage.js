import React, { useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import "./CampaignPage.scss";

import { useLocation, useNavigate } from "react-router-dom";
import FetchService from "../../api/FetchService";
import { isLoggedIn } from "../../api/NewLoginService";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function CampaignPage() {
  let currentdate = new Date();
  const navigate = useNavigate();
  const location = useLocation();

  const [booking, setBooking] = useState({ currentdate });
  const [activity, setActivity] = useState(location.state);
  const [peopleNumber, setPeopleNumber] = useState(+location.state?.minPerson);
  const [images, setImages] = useState(JSON.parse(activity.images));
  const [userObject, setUser] = useState(isLoggedIn()?.user);


  debugger;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const BookActivity = async () => {
    const bookActivity = {
      activity: activity,
      peopleNumber: peopleNumber,
      user: userObject
    };

    var request =   
    {
    userID: userObject.id,
    totalAmount: activity.price * peopleNumber,
    additionalDetails: "No details right now.",
    address: activity.city,
    createdDate: booking.currentdate,
    activityOrders: [activity],
  };

    var response = FetchService.BookAcitvity(request);

    response.then((data) => {
      if (data.data > 0) {
        
    navigate("/booking-confirmation", { state: bookActivity });
      }
    });
  };

  return (
    <div className="campaign_Page">
      <InnerHeader HeaderHeading={activity.name} PageText={activity.name} />

      <div className="campaign_main">
        <div className="container">
          <div className="row row_custom">
            <div className="col-lg-6 col_content_otr">
              <div className="col_content_inr">
                <div className="content">
                  <p className="heading-m campaign_text">
                    Fangene på Fortet tilbyr 48 forskjellige celler med ulike
                    oppgaver man skal løse sammen som et lag.
                  </p>
                  <p className="heading-m campaign_text">
                    Inviter venner, familie eller kollegaer enten nok til et lag
                    – eller flere lag og konkurrer mot hverandre!
                  </p>
                  <p className="heading-m campaign_text">
                    Hos Fangene på Fortet kan du arrangere teambuilding som en
                    spennende og morsom konkurranse blant de ansatte, eller
                    arrangere utdrikningslag for den som skal drikkes ut. Det er
                    behov for alle slags egenskaper og talenter: Fysikk,
                    kunnskap og kreativitet.
                  </p>
                  <p className="heading-m campaign_text">
                    Vi har oppgaver som passer for alle – uansett fysisk form og
                    alder.
                  </p>
                  <p className="heading-m campaign_text">
                    Vi anbefaler fra 3 – 5 deltakere per lag slik at man får
                    mest ut av opplevelsen, men det er også mulig å bare være 2.
                  </p>
                </div>
                <h3 className="heading-h3 heading_terms">Vilkår</h3>
                <div className="content">
                  <p className="heading-m campaign_text">
                    Valid for:{" "}
                    <b>
                      {activity.minPerson} - {activity.maxPerson}
                    </b>{" "}
                    Personer
                  </p>
                  <p className="heading-m campaign_text">
                    Aktivitet må bookes mellom:{" "}
                    <b>
                      {formatDate(activity.validPeriodStart)} -{" "}
                      {formatDate(activity.validPeriodEnd)}
                    </b>
                  </p>
                  <p className="heading-m campaign_text">
                    Bruk rabattkode ved booking
                  </p>
                  <p className="heading-m campaign_text">
                    Aktivitet bookes direkte med Fangene på fortet
                  </p>
                  <p className="heading-m campaign_text">
                    Dealer som ikke brukes grunnet for sen booking, sykdom,
                    manglende oppmøte, avbestilling eller flytting mindre enn 24
                    timer før bestilt time, refunderes ikke
                  </p>
                </div>
              </div>
              <br />
              <br />

              <button
                class="Theme_btn_primary"
                onClick={() => {
                  BookActivity();
                }}
              >
                Book
              </button>
            </div>
            <div className="col-lg-6 col_img_otr">
              <div className="col_img_inr">
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
                  {images.map((image) => (
                    <SwiperSlide>
                      <div className="img_otr">
                        <img
                          className="campaign_img"
                          height="50"
                          width="70"
                          src={image.imageURL}
                          alt="img"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="social_text_otr">
                  <ul className="text_ul">
                  <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        {"Vendor: " + activity.partnerName}
                      </h3>
                    </li>
                    <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        {"Price: " + activity.price + " NOK / Person"}
                      </h3>
                    </li>
                    <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        <div className="icon_text_otr">
                          <i
                            onClick={() =>
                              peopleNumber > activity.minPerson
                                ? setPeopleNumber(peopleNumber - 1)
                                : setPeopleNumber(peopleNumber)
                            }
                            class="ri-indeterminate-circle-fill q_icon"
                          ></i>
                          <p>{peopleNumber}</p>
                          <i
                            onClick={() =>
                              peopleNumber < activity.maxPerson
                                ? setPeopleNumber(1 + peopleNumber)
                                : setPeopleNumber(peopleNumber)
                            }
                            class="ri-add-circle-fill q_icon"
                          ></i>
                        </div>
                        personer
                      </h3>
                    </li>
                    {/* <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        {location.state.description}
                      </h3>
                    </li> */}
                    <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        {"Discount: " + activity.discountPercent + "%"}
                      </h3>
                    </li>
                  </ul>

                  {/* Todo: here we can put some more information */}
                  <ul className="social_ul"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignPage;
