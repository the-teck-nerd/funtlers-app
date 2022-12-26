import React, { useState } from "react";
import { Link } from "react-router-dom";
import Check from "../Check/Check";
import "./LoginComponent.scss";
import { loginUser } from "../../api/NewLoginService";

export default function LoginComponent({
  setUser,
  setShowLogin,
  setIsLoading,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    loginUser({
      email,
      password,
    }).then((response) => {
      if (response) {
        //Setting state for parent component to redirect to home (/) page

        setResponseMessage("Success");

        setTimeout(() => {
          setIsLoading(false);
          setUser(response);
          setShowLogin(false);
        }, 4000);
      } else {
        setResponseMessage("Failed");
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    });
  };

  return (
    <>
      <h3 className="heading-h3 form_heading">Logg inn hos Funtlers</h3>
      {responseMessage === "Failed" && (
        <div className="error_message">{"Feil brukernavn eller passord."}</div>
      )}
      {responseMessage === "Success" && (
        <div className="success_message">{"Logget på vellykket."}</div>
      )}

      <form onSubmit={handleSubmit} className="form_main">
        <div className="Input_otr">
          <input
            required
            className="Theme_input_white form_input"
            type="email"
            name="email"
            placeholder="E-post"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="Input_otr">
          <input
            required
            className="Theme_input_white form_input"
            type="password"
            name="password"
            placeholder="Passord"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Input_otr check_forget_otr">
          <Check CheckLabel="Husk meg" />
          <Link className="heading-s forgot_text">Glemt passord?</Link>
        </div>
        <div className="Input_otr action_otr">
          <button className="Theme_btn_primary form_btn" type="submit">
            Logg inn
          </button>
        </div>
      </form>
    </>
  );
}
