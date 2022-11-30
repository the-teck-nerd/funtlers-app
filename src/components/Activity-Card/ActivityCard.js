import React from "react"
import './ActivityCard.scss';



export function ActivityCard(props) {
    let activity = props.data;
    return (<> <div class="activityCard"><img src={activity.avatar} /> <div class="activityInfo"> {activity.first_name} <b>{activity.last_name}</b> </div></div></>)
} 