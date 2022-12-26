import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHeader from "../InnerHeader/InnerHeader";
import Input from "../Input/Input";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { register } from "../../api/LoginService";

import LoadingOverlay from "react-loading-overlay";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.phone = phone;
    setIsLoading(true);
    register(user).then((response) => {
      if (response === "Success") {
        clearForm();
      }
      setTimeout(() => {
        setIsLoading(false);
        setResponse(response);
      }, 3000);
    });
  };

  function clearForm() {
    setFirstName("");
    setLastName("");
    setPassword("");
    setPhone("");
    setEmail("");
  }

  return (
    <LoadingOverlay active={isLoading} spinner text="Vi oppretter din konto">
      <div className="Register_page">
        <InnerHeader
          HeaderHeading="Registrer deg hos Funtlers"
          PageText="Register"
        />
        <section className="Register_main">
          <div className="container">
            <div className="row row_custom">
              <div className="col-lg-6 col_form_otr">
                <div className="col_form_inr">
                  <h3 className="heading-h3 form_heading">Register deg her</h3>
                  {response === "Failed" && (
                    <div className="error_message">
                      {
                        "Bruker med denne e-postadressen eksisterer allerede. Vennligst prøv igjen med en annen e-postadresse."
                      }
                    </div>
                  )}
                  {response === "Success" && (
                    <div className="success_message">
                      {
                        "Din bruker har blitt registrert. Logg inn for å se din konto"
                      }
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
                        InputPlaceholder="E-post adresse"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="number"
                        InputName="number"
                        InputPlaceholder="Telefon"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr">
                      <Input
                        InputClass="Theme_input_white form_input"
                        Inputype="password"
                        InputName="password"
                        InputPlaceholder="Passord"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <div className="Input_otr action_otr">
                      <button
                        type="submit"
                        className="Theme_btn_primary form_btn"
                      >
                        Registrere
                      </button>
                    </div>
                    <div className="login_text_otr">
                      <Link to="/login" className="login_text heading-sb">
                        Logg inn
                      </Link>
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

export default Register;
