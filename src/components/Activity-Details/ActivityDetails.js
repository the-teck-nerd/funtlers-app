import React from "react"
import './ActivityDetails.scss';
import {useLocation , useNavigate} from 'react-router-dom';
import axios from "axios";
    
function  ActivityDetails()  {
    const navigate = useNavigate();
    const location = useLocation();
    const BookActivity=async (activityData)=>{

        let activity={
            "id": 0,
            "userID": 0,
            "totalAmount": activityData.totalAmount,
            "additionalDetails": "string",
            "address": "string",
            "createdDate": "2022-12-01T20:33:29.342Z",
            "activityOrders": [
                activityData
            ]
          }
          
          const response = await axios.post('https://localhost:44360/Order', activity);

          console.log(response.data);

          if(response.data>0)
          {
            navigate('/payment',{state:response.data});
          }


     }
    return (

        <>
            <div>{location.state.name}</div>
            <div>{location.state.imagePath}</div>
            <div>{location.state.description}</div>
            <div>{location.state.price}</div>
            <button onClick={()=>{BookActivity(location.state)}}>Book</button>


        </>
    )

} 



export default ActivityDetails;
