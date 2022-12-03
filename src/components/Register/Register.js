import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../InnerHeader/InnerHeader";
import Input from "../Input/Input";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { register } from "../../api/LoginService";

import "./Register.scss";

//userTypeID = 1 because its for customers
let user = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  userTypeId: 1,
};

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.phone = phone;

    register(user).then((response) => {
      setResponse(response);
    });
  };

  if (response === "Success") {
    return <div>Success</div>;
  } 

  return (
    <div className="Register_page">
      <InnerHeader HeaderHeading="Register" PageText="Register" />
      <section className="Register_main">
        <div className="container">
          <div className="row row_custom">
            <div className="col-lg-6 col_form_otr">
              <div className="col_form_inr">
                <h3 className="heading-h3 form_heading">
                  Register to Funtlers
                </h3>
                {response === "Failed" && (
                  <div className="error_message">
                    {
                      "User with this email address already exists. Please try again with different email"
                    }
                  </div>
                )}
                <form onSubmit={handleSubmit} className="form_main">
                  <div className="Input_otr">
                    <Input
                      InputClass="Theme_input_white form_input"
                      Inputype="fname"
                      InputName="fname"
                      InputPlaceholder="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </div>
                  <div className="Input_otr">
                    <Input
                      InputClass="Theme_input_white form_input"
                      Inputype="lname"
                      InputName="lname"
                      InputPlaceholder="Last Name"
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
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="Input_otr">
                    <Input
                      InputClass="Theme_input_white form_input"
                      Inputype="number"
                      InputName="number"
                      InputPlaceholder="Phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                  <div className="Input_otr">
                    <Input
                      InputClass="Theme_input_white form_input"
                      Inputype="password"
                      InputName="password"
                      InputPlaceholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="Input_otr action_otr">
                    <button
                      type="submit"
                      className="Theme_btn_primary form_btn"
                    >
                      Register
                    </button>
                  </div>
                  <div className="login_text_otr">
                    <Link to="/login" className="login_text heading-sb">
                      Login
                    </Link>
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

export default Register;
