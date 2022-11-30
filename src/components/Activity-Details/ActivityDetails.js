import React from "react"
import './ActivityCard.scss';



export function ActivityCard(props) {
    let activity = props.data;
    return ( <div><h1>Activity Detail </h1>  <img src={activity.avatar} /> {activity.first_name}  {activity.last_name} </div>)
} 