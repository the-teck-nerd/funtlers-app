import React, { useEffect, useState } from "react"
import './Activities.scss';
import Hero from '../Hero/Hero'
import { ActivityCard } from "../Activity-Card/ActivityCard";


function Activities() {

  const [activities, setActivities] = useState([])

  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setActivities(data.data)
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



