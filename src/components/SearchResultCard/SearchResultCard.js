import React from "react";
import "./SearchResultCard.scss";
import { Link, useNavigate } from "react-router-dom";

function SearchResultCard(props) {
  let activity;

  //the rerouting from this component will be different if it is coming from customer side.
  if (props.source === "customer") activity = props.Data;
  else activity = props.activity;

  const navigate = useNavigate();
  const toActivityDetails = () => {
    if (props.source === "customer")
      navigate("/activity-detail", { state: activity });
    else navigate("/edit-activity", { state: activity });
  };
  return (
    <div
      className="col-lg-3 col-md-4 col-sm-6 col_searchCard_otr"
      onClick={() => {
        toActivityDetails();
      }}
    >
      <div className="col_searchCard_inr">
        <div className="img_otr">
          <div className={`${props.IconDivClass} icon_otr`}>
            <i class={`${props.IconClass} edit_icon`}></i>
          </div>
          <img className="card_img" src={props.CardImg} alt="img" />
        </div>
        <div className="content">
          <Link className="heading-lb card_heading">{props.CardHeading}</Link>
          <p className="heading-s card_desc">{props.CardDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResultCard;
