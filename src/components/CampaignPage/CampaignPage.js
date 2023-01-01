import React, { useEffect, useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import "./CampaignPage.scss";

import { useLocation, useNavigate } from "react-router-dom";
import FetchService from "../../api/FetchService";
import { isLoggedIn, setBookingSession } from "../../api/NewLoginService";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import apiURL from "./../../api/API-Url";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import LoadingOverlay from "react-loading-overlay";

function CampaignPage() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const activityIdQuery = params.get("id"); //

  let currentdate = new Date();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  //getting activity id from previous screen

  const activityId = activityIdQuery ? activityIdQuery : location.state?.id;

  const [booking, setBooking] = useState({ currentdate });

  var [activity, setActivity] = useState({});

  const [peopleNumber, setPeopleNumber] = useState(0);
  const [images, setImages] = useState([]);
  const userObject = isLoggedIn()?.user;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  function SaveSession() {
    
    const bookActivity = {
      activity: activity,
      peopleNumber: peopleNumber,
      user: userObject,
      images: images?.length > 0 ? images[0] : null,
    };
    setBookingSession(bookActivity);
  }

  const BookActivity = async () => {
    const bookActivity = {
      activity: activity,
      peopleNumber: peopleNumber,
      user: userObject,
    };

    var request = {
      userID: userObject.id,
      totalAmount: activity.price * peopleNumber,
      additionalDetails: "No details right now.",
      address: activity.city,
      createdDate: booking.currentdate,
      quantity: peopleNumber,
      activityId: activity.id,
    };

    var response = FetchService.BookAcitvity(request);

    response.then((data) => {
      if (data.data > 0) {
        navigate("/booking-confirmation", { state: bookActivity });
      }
    });
  };

  useEffect(() => {
    const GetActivityById = () => {
      var response = FetchService.GetActivityById(activityId);

      response.then((data) => {
        
        if (data) {
          setActivity(data.data[0]);
          setPeopleNumber(data.data[0]?.minPerson);
          setImages(JSON.parse(data.data[0]?.images));
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      });
    };

    GetActivityById();
  }, []);

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Behandler forespørselen din"
    >
      <div className="campaign_Page">
        <InnerHeader HeaderHeading={activity.name} PageText={activity.name} />

        <div className="campaign_main">
          <div className="container">
            <div className="row row_custom">
              <div className="col-lg-6 col_content_otr">
                <div className="col_content_inr">
                  <div className="content">
                    <p className="heading-m campaign_text">
                      {activity?.description}
                    </p>
                    {/* <p className="heading-m campaign_text">
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
                  </p> */}
                  </div>
                  <h3 className="heading-h3 heading_terms">Vilkår</h3>
                  <div className="content">
                    <p className="heading-m campaign_text">
                      Prisen: <b> {activity.price + " NOK"} </b> {" pr.pers"}
                      <br />
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
                    <p className="heading-m campaign_text">{activity?.terms}</p>

                    {/* <p className="heading-m campaign_text">
                    Bruk rabattkode ved booking
                  </p>
                  <p className="heading-m campaign_text">
                    Aktivitet bookes direkte med Fangene på fortet
                  </p>
                  <p className="heading-m campaign_text">
                    Dealer som ikke brukes grunnet for sen booking, sykdom,
                    manglende oppmøte, avbestilling eller flytting mindre enn 24
                    timer før bestilt time, refunderes ikke
                  </p> */}
                  </div>
                </div>
                <br />
                <br />
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
                    {images &&
                      images.map((image) => (
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
                          {"Leverandør: " + activity.partnerName}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading heading-h3">
                          {"Totalkostnad: " +
                            activity.price * peopleNumber +
                            " NOK"}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading heading-h3">
                          {"Prisen: " + activity.price + " NOK pr.pers"}
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
                          {"Rabatt: " + activity.discountPercent + "%"}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading heading-h3">
                          {"Spart beløp: " +
                            (activity.originalPrice - activity.price) *
                              peopleNumber +
                            " NOK"}
                        </h3>
                      </li>
                      <li className="text_li">
                        {/* <button
                        class="Theme_btn_primary"
                        onClick={() => {
                          if (!userObject) {
                            alert("Error: User not logged in");
                          } else {
                            BookActivity();
                          }
                        }}
                      >
                        Book
                      </button> */}

                        <section>
                          
                            {userObject ? (
                              <form
                              action={
                                apiURL() +
                                "create-checkout-session?PriceID=" +
                                activity.stripePaymentID +
                                "&Quantity=" +
                                peopleNumber +
                                "&ActivityId=" +
                                activityId
                              }
                              method="POST"
                            >
                              <button
                                onClick={() => {
                                  SaveSession();
                                }}
                                class="Theme_btn_primary"
                                type="submit"
                              >
                                Book
                              </button>
                              </form>

                            ) : (
                              <button
                                class="Theme_btn_primary"
                                onClick={() => {
                                    alert("Error: User not logged in");
                                }}
                              >
                                Book
                              </button>
                            )}{" "}
                        </section>
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
    </LoadingOverlay>
  );
}

export default CampaignPage;
