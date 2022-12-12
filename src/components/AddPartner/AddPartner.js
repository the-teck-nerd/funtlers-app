import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../InnerHeader/InnerHeader";
import Input from "../Input/Input";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { register } from "../../api/LoginService";
import FetchService from "../../api/FetchService";
import LoadingOverlay from "react-loading-overlay";

import "./AddPartner.scss";

//userTypeID = 1 because its for customers
//Todo: edit this object model
let partner = {
  name: "",
  type: "",
  city: "",
  price: 0,
  originalPrice: 0,
  validPeriodEnd: "",
  validPeriodStart: "",
  description: "",
  imagePath: "",
  minPerson: 0,
  maxPerson: 0,
  discountPercent: 0,
  addDate: new Date().toISOString().slice(0, 10),
  occassion: "",
};

function AddPartner() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [partnerSince, setpartnerSince] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    partner.name = name;
    partner.address = address;
    partner.city = city;
    partner.zip = zip;
    partner.partnerSince = partnerSince;
    partner.email = email;
    partner.phone = phone;

    FetchService.AddPartner(partner).then((response) => {
      setIsLoading(true);
      
      if (response?.data===1) {
        setResponse("Success");
        clearForm();
      } else {
        setIsLoading(false);
        setResponse("Failed");
      }
    });
  };

  function clearForm() {
    setName("");
    setEmail("");
    setCity("");
    setZip("");
    setAddress("");
    setPhone("");
    setpartnerSince("");
    setIsLoading(false);
  }

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Processing your request..."
    >
      <div className="Register_page">
        <InnerHeader HeaderHeading="Partner" PageText="Add Partner" />
        <section className="Register_main">
          <div className="container">
            <div className="row w-100">
              <div className="px-2 col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">Add a new partner</h3>
                  {response === "Failed" && (
                    <div className="error_message">
                      {
                        "Partner with this name already exists."
                      }
                    </div>
                  )}
                  {response === "Success" && (
                    <div className="success_message">
                      {
                        "Partner successfully registered!"
                      }
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="form_main">
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="name"
                        label="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="address"
                        label="Address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="city"
                        label="City"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="zip"
                        label="Zip code"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="datetime-local"
                        InputName="partnerSince"
                        label="Partner Since"
                        value={partnerSince}
                        onChange={(event) =>
                          setpartnerSince(event.target.value)
                        }
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        label="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="number"
                        InputName="phone"
                        label="Phone number"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
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

export default AddPartner;
