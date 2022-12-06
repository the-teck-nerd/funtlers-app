import React, {useState} from "react";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Toast({message})
{


const [toastMessage]=useState(message);
 

toast.success(toastMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
return (<ToastContainer/>)    
}