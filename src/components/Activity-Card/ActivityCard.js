import React from "react";
import "./ActivityCard.scss";
import {Link, useNavigate} from 'react-router-dom';

export function ActivityCard(props) {
    let activity = props.data;

    const navigate = useNavigate();
    const toActivityDetails=()=>{
       navigate('/activity-details',{state:activity});
    }


  return (
    <>
      <a  onClick={()=>{toActivityDetails()}}
      >
        <div class="activityCard">
          <img src={activity.imagePath} />{" "}
          <div class="activityInfo">
            {" "}
            {activity.name}{" "}
          </div>
        </div>
      </a>
    </>
  );
}
