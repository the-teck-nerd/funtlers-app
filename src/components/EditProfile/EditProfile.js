import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../InnerHeader/InnerHeader";
import Input from "../Input/Input";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { register } from "../../api/LoginService";

import LoadingOverlay from "react-loading-overlay";

import "./EditProfile.scss";
import { isLoggedIn } from "../../api/NewLoginService";
import FetchService from "../../api/FetchService";

let user = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  currentPassword: "",
  newPassword: "",
  phone: "",
  userTypeId: 1,
};

function EditProfile() {
  const userObject = isLoggedIn()?.user;

  const [firstName, setFirstName] = useState(userObject?.firstName);
  const [lastName, setLastName] = useState(userObject?.lastName);
  const [email, setEmail] = useState(userObject?.email);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [phone, setPhone] = useState(userObject?.phone);

  const [response, setResponse] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (newPassword !== repeatPassword) {
      setResponse("Failed");
      setResponseMessage("Error: Password don't match");
    } else {
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.currentPassword = currentPassword;
      user.newPassword = newPassword;
      user.phone = phone;
      user.id= userObject.id;

      FetchService.UpdateUser(user).then((response) => {
        if (response === true) {
          setResponse("Success");
          setResponseMessage("Profile has been successfully updated");
          clearForm();
        }
        else
        {
          setResponse("Failed");
          setResponseMessage("Error: Wrong password entered. Please try again.");
        }
        setTimeout(() => {
          setIsLoading(false);
          setResponse(response);
        }, 3000);
      });
    }
  };

  function clearForm() {
    setFirstName("");
    setLastName("");
    setCurrentPassword("");
    setRepeatPassword("");
    setNewPassword("");
    setPhone("");
  }

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Processing your request..."
    >
      <div className="Register_page">
        <InnerHeader HeaderHeading="Rediger profil" />
        <section className="Register_main">
          <div className="container">
            <div className="row row_custom">
              <div className="col-lg-6 col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">Rediger profil</h3>
                  {response !== "" && (
                    <div
                      className={
                        response === "Failed"
                          ? "error_message"
                          : "success_message"
                      }
                    >
                      {responseMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="form_main">
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="fname"
                        InputName="fname"
                        InputPlaceholder="Fornavn"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="lname"
                        InputName="lname"
                        InputPlaceholder="Etternavn"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="email"
                        InputName="email"
                        InputPlaceholder="Email Address"
                        value={email}
                        disabled={true}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="number"
                        InputName="number"
                        InputPlaceholder="Telefonnummer"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="password"
                        InputName="password"
                        InputPlaceholder="Nåværende passord"
                        onChange={(event) =>
                          setCurrentPassword(event.target.value)
                        }
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="password"
                        InputName="password"
                        InputPlaceholder="Nytt passord"
                        onChange={(event) => setNewPassword(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="password"
                        InputName="password"
                        InputPlaceholder="Gjenta passord"
                        onChange={(event) =>
                          setRepeatPassword(event.target.value)
                        }
                      />
                    </div>
                    <div className="Input_otr action_otr">
                      <button
                        type="submit"
                        className="Theme_btn_primary form_btn"
                      >
                        Update
                      </button>
                    </div>
                    {/* <div className="login_text_otr">
                      <Link to="/login" className="login_text heading-sb">
                        Login
                      </Link>
                    </div> */}
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

export default EditProfile;
