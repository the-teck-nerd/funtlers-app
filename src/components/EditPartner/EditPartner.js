import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../InnerHeader/InnerHeader";
import Input from "../Input/Input";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { register } from "../../api/LoginService";
import FetchService from "../../api/FetchService";
import LoadingOverlay from "react-loading-overlay";

import "./EditPartner.scss";

//userTypeID = 1 because its for customers
let partner = {};

function EditPartner() {

  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [zip, setzip] = useState("");
  const [partnerSince, setpartnerSince] = useState("");



  const [isLoading, setIsLoading] = useState(false);


  FetchService.GetPartner().then((response)=>{
     response=response.data.filter(obj=>obj.id==1);
    partner=response[0];
    setName(partner.name);
    setaddress(partner.address);
    setcity(partner.city);
    setzip(partner.zip);
    setpartnerSince(partner.partnerSince);



   
  })

    const handleSubmit = async (e) => {
      e.preventDefault();

      partner.name= name;
      partner.address =address;
      partner.city=city;
      partner.zip=zip;
      partner.partnerSince=partnerSince;
      

     
     console.log(partner);

     FetchService.EditPartner(partner).then((response)=>{
       if(response)
       {
        alert("added");
       }
       else
       {
        alert("failed");
       }
     })
      
    };

    function clearForm() {
      

      
    }

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Processing your request..."
    >
      <div className="Register_page">
        <InnerHeader HeaderHeading="Partner" PageText="Edit Partner" />
        <section className="Register_main">
          <div className="container">
            <div className="row row_custom">
              <div className="col-lg-6 col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">
                    Register to Funtlers
                  </h3>
                  {/* {response === "Failed" && (
                    <div className="error_message">
                      {
                        "User with this email Editress already exists. Please try again with different email."
                      }
                    </div>
                  )}
                  {response === "Success" && (
                    <div className="success_message">
                      {
                        "User successfully registered! Please login to access your account!"
                      }
                    </div>
                  )} */}

                  <form onSubmit={handleSubmit} className="form_main">
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="name"
                        label="Partner Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                   
                    <div className="Input_otr">
                    <Input
                      InputClass="Theme_input_white form_input"
                      Inputype="text"
                      InputName="address"
                      label="Partner Address"
                      value={address}
                      onChange={(event) => setaddress(event.target.value)}
                    />
                  </div>

                  
                  <div className="Input_otr">
                  <Input
                    InputClass="Theme_input_white form_input"
                    Inputype="text"
                    InputName="city"
                    label="Partner City"
                    value={city}
                    onChange={(event) => setcity(event.target.value)}
                  />
                </div>


                <div className="Input_otr">
                  <Input
                    InputClass="Theme_input_white form_input"
                    Inputype="text"
                    InputName="zip"
                    label="Partner Zip"
                    value={zip}
                    onChange={(event) => setzip(event.target.value)}
                  />
                </div>
                
                <div className="Input_otr">
                  <Input
                    InputClass="Theme_input_white form_input"
                    Inputype="datetime-local"
                    InputName="partnerSince"
                    label="Partner Since"
                    value={partnerSince}
                    onChange={(event) => setpartnerSince(event.target.value)}
                  />
                </div>
               

                 


                    
                
                    <div className="Input_otr action_otr">
                      <button
                        type="submit"
                        className="Theme_btn_primary form_btn"
                      >
                        Add Partner
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LoadingOverlay>
  );
}

export default EditPartner;
