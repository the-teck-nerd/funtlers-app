import React, { useState, useEffect } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import "./OrderedActivity.scss";
import { useLocation } from "react-router-dom";
import FetchService from "../../api/FetchService";

import LoadingOverlay from "react-loading-overlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function OrderedActivity() {
  let currentdate = new Date();

  const location = useLocation();

  const [order, setOrder] = useState(location.state);

  const [activity, setActivity] = useState();
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    let apicall = FetchService.GetActivityById(order.ActivityId);

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setActivity(data[0]);
        setImages(JSON.parse(data[0].images));
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };
  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Processing your request..."
    >
      <div className="campaign_Page">
        <InnerHeader HeaderHeading={activity?.name} PageText={activity?.name} />
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
                      Inviter venner, familie eller kollegaer enten nok til et
                      lag – eller flere lag og konkurrer mot hverandre!
                    </p>
                    <p className="heading-m campaign_text">
                      Hos Fangene på Fortet kan du arrangere teambuilding som en
                      spennende og morsom konkurranse blant de ansatte, eller
                      arrangere utdrikningslag for den som skal drikkes ut. Det
                      er behov for alle slags egenskaper og talenter: Fysikk,
                      kunnskap og kreativitet.
                    </p>
                    <p className="heading-m campaign_text">
                      Vi har oppgaver som passer for alle – uansett fysisk form
                      og alder.
                    </p>
                    <p className="heading-m campaign_text">
                      Vi anbefaler fra 3 – 5 deltakere per lag slik at man får
                      mest ut av opplevelsen, men det er også mulig å bare være
                      2.
                    </p>
                  </div>
                  <h3 className="heading-h3 heading_terms">Vilkår</h3>
                  <div className="content">
                    <p className="heading-m campaign_text">
                      Prisen: <b> {activity?.price + " NOK"} </b> {" pr.pers"}
                      <br />
                      Valid for:{" "}
                      <b>
                        {activity?.minPerson} - {activity?.maxPerson}
                      </b>{" "}
                      Personer
                    </p>
                    <p className="heading-m campaign_text">
                      Aktivitet må bookes mellom:{" "}
                      <b>
                        {formatDate(activity?.validPeriodStart)} -{" "}
                        {formatDate(activity?.validPeriodEnd)}
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
                      manglende oppmøte, avbestilling eller flytting mindre enn
                      24 timer før bestilt time, refunderes ikke
                    </p>
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
                      <h2 className="heading-h2">Ordre detaljer</h2>
                      <li className="text_li">
                        <h3 className="text_heading ">
                          {"Dato for bestilling: " +
                            order?.CreatedDate.slice(0, 10)}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading ">
                          {"Leverandør: " + activity?.partnerName}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading ">
                          {"Totalkostnad: " + order?.TotalAmount + " NOK"}
                        </h3>
                        <h3 className="text_heading "></h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading ">
                          <div className="icon_text_otr">
                            <p>{order?.Quantity}</p>
                          </div>
                          personer
                        </h3>
                      </li>

                      <li className="text_li">
                        <h3 className="text_heading">
                          {"Rabatt: " + activity?.discountPercent + "%"}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading ">
                          {"Spart beløp: " +
                            (activity?.originalPrice - activity?.price) *
                              order?.Quantity +
                            " NOK"}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading ">
                          {"Brukt: " +
                            (order?.IsConsumed === true ? "Ja" : "Nei")}
                        </h3>
                      </li>
                      <li className="text_li">
                        <h3 className="text_heading ">
                          {"bekreftelseskode: " + order?.Code}
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
    </LoadingOverlay>
  );
}

export default OrderedActivity;
