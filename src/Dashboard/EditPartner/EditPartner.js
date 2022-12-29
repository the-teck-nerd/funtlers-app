import React, { useState } from "react";

import Input from "../../components/Input/Input";
import FetchService from "../../api/FetchService";
import { useLocation } from "react-router-dom";
import "./EditPartner.scss";

//userTypeID = 1 because its for customers
//Todo: edit this object model
let partnerRequest = {
  id: 0,
  name: "",
  city: "",
  address: "",
  zip: "",
  email: "",
  phone: "",
};

function EditPartner() {
  const location = useLocation();
  const partner = location.state;

  const [name, setName] = useState(partner.name);
  const [address, setAddress] = useState(partner.address);
  const [city, setCity] = useState(partner.city);
  const [zip, setZip] = useState(partner.zip);
  const [email, setEmail] = useState(partner.email);
  const [phone, setPhone] = useState(partner.phone);

  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    partnerRequest.name = name;
    partnerRequest.address = address;
    partnerRequest.city = city;
    partnerRequest.zip = zip;
    partnerRequest.id = partner.id;
    partnerRequest.email = email;
    partnerRequest.phone = phone;

    FetchService.UpdatePartner(partnerRequest).then((response) => {
      if (response) {
        setResponse("Success");
        clearForm();
      } else {
        setResponse("Failed");
      }
    });
  };

  function clearForm() {
    setAddress("");
    setName("");
    setCity("");
    setEmail("");
    setPhone("");
    setZip("");
  }

  return (
    <div className="Register_page">
      <section className="">
        <div className="container">
          <div className="row w-100">
            <div className="px-2 col_form_otr">
              <div className="col_form_inr">
                <h3 className="heading-h3 form_heading">Rediger partner</h3>
                {response === "" && (
                  <div className="error_message">
                    {
                      "Feil: Kunne ikke oppdatere partnerdata. Vær så snill, prøv på nytt"
                    }
                  </div>
                )}
                {response === "" && (
                  <div className="success_message">
                    {"Partneren er oppdatert"}
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
                      label="Telefon"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  <div className="Input_otr action_otr">
                    <button
                      type="submit"
                      className="Theme_btn_primary form_btn"
                    >
                      Oppdatert partner
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditPartner;
