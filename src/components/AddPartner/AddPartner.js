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
  city: "",
  address: "",
  zip: "",
  email: "",
  phone: "",
};

function AddPartner() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setResponse("");
    partner.name = name;
    partner.address = address;
    partner.city = city;
    partner.zip = zip;
    partner.partnerSince = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    partner.email = email;
    partner.phone = phone;

    FetchService.AddPartner(partner).then((response) => {
      if (response?.data === 1) {
        //todo: fix this timer of loader issue
        // setTimeout(() => {
        setResponse("Success");
        clearForm();
        setIsLoading(false);
        // }, 5);

        clearForm();
      } else {
        // setTimeout(() => {
        setIsLoading(false);
        setResponse("Failed");
        // }, 0);
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
    setIsLoading(false);
  }

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Behandler forespørselen din"
    >
      <div className="Register_page">
        <section className="add_partner_main">
          <InnerHeader HeaderHeading="Add Partner" PageText="Add Partner" />
          <div className="container">
            <div className="row row_custom">
              <div className="col-lg-8 col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">
                    Legg til ny partner
                  </h3>
                  {response === "Failed" && (
                    <div className="error_message">
                      {"Feil: Partner ikke registrert. Prøv igjen."}
                    </div>
                  )}
                  {response === "Success" && (
                    <div className="success_message">
                      {"Partner registrert"}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="form_main">
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="name"
                        label="Navn"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="address"
                        label="Adresse"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="city"
                        label="By"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="zip"
                        label="Postkode"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
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
                        label="Telefonnummer"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>

                    <div className="Input_otr action_otr">
                      <button
                        type="submit"
                        className="Theme_btn_primary form_btn"
                      >
                        Legg til
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
