import React, { useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import { Link } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import "./CampaignPage.scss";
import campaignImg from "../../img/booking-confirmation-img.png";
import { useLocation, useNavigate } from "react-router-dom";
import FetchService from "../../api/FetchService";

function CampaignPage() {
  let currentdate = new Date();

  const [booking, setBooking] = useState({ currentdate });
  
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const BookActivity = async (activityData) => {
    let activity = {
      id: 0,
      userID: 0,
      totalAmount: activityData.price * activityData.totalPerson,
      additionalDetails: "string",
      address: "string",
      createdDate: booking,
      activityOrders: [activityData],
    };

    const response = FetchService.BookAcitvity(activity);

    response.then((data) => {
      if (data.data > 0) {
        navigate("/booking-confirmation", { state: activity });
      }
    });
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState]= useState(location.state);
  const [peopleNumber, setPeopleNumber] = useState(+location.state?.totalPerson);



  return (
    <div className="campaign_Page">
      <InnerHeader
        HeaderHeading={state.name}
        PageText={state.name}
      />

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
                    Aktivitet må bookes mellom 1.{" "}
                    <b>
                      {formatDate(state.validPeriodStart)} -{" "}
                      {formatDate(state.validPeriodEnd)}
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
                  BookActivity(state);
                }}
              >
                Book
              </button>
            </div>
            <div className="col-lg-6 col_img_otr">
              <div className="col_img_inr">
                <img className="campaign_img" src={campaignImg} alt="img" />
                <div className="social_text_otr">
                  <ul className="text_ul">
                    <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        <div className="icon_text_otr">
                          <i onClick={()=>setPeopleNumber(peopleNumber-1)} class="ri-indeterminate-circle-fill q_icon"></i>
                          <p>{peopleNumber}</p>
                          <i onClick={()=>setPeopleNumber(1+peopleNumber)} class="ri-add-circle-fill q_icon"></i>
                        </div>
                        personer
                      </h3>
                    </li>
                    <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        {location.state.description}
                      </h3>
                    </li>
                    <li className="text_li">
                      <h3 className="text_heading heading-h3">
                        {"Discount: "+state.discountPercent+'%'}
                      </h3>
                    </li>
                  </ul>
                  <ul className="social_ul">
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
                  </ul>
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
