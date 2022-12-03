import React, { useEffect, useState } from "react"
import './Activities.scss';
import Hero from '../Hero/Hero'
import { ActivityCard } from "../Activity-Card/ActivityCard";
import FetchService from "../../api/FetchService";


function Activities() {



  const [activities, setActivities] = useState([])

  const fetchData = () => {
    let ownerid = 1;
    let apicall =   FetchService.getAllActivities(ownerid);

    apicall
      .then(response => {
        
        return response.data
      })
      .then(data => {
        
        // data.data=[{"id":1,"name":"string","price":0,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":true,"ownerID":1,"activityType":"string"},{"id":2,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null},{"id":3,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null}];
        setActivities(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (<> <Hero />  <div class="activitiesContainer">

    {activities.map(activity => (
      <ActivityCard data={activity} />

    ))}
</div></>)
  

}
export default Activities;



