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

  console.table(partner);

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
    partnerRequest.email=email;

    console.log(partner);

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
                <h3 className="heading-h3 form_heading">Update Partner</h3>
                {response === "Failed" && (
                  <div className="error_message">
                    {
                      "Error: Failed to update partner data. Please try again"
                    }
                  </div>
                )}
                {response === "Success" && (
                  <div className="success_message">
                    {
                      "Partner Data Update Successfully"
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
                      label="Zip"
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
                      label="Phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  <div className="Input_otr action_otr">
                    <button
                      type="submit"
                      className="Theme_btn_primary form_btn"
                    >
                      Update Partner
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
