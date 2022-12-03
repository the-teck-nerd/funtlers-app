import React, { useState } from "react";
import { Link } from "react-router-dom";
import Check from "../Check/Check";
import InnerHeader from "../InnerHeader/InnerHeader";
import "./Login.scss";
import { loginUser, setToken } from "../../api/LoginService";
import { useLocation } from "react-router-dom";
let token = { state: "success" | "failed", email: "", firstName: "" };

export default function Login(props) {
  debugger;
  const location = useLocation();
 

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const response = await loginUser(
      {
        userName,
        password,
      },
      token
    );
    setToken(response);
  };

  return (
    <div className="Login_page">
      <InnerHeader HeaderHeading="Log In" PageText="Login" />
      <section className="login_main">
        <div className="container">
          <div className="row row_custom">
            <div className="col-lg-6 col_form_otr">
              <div className="col_form_inr">
                <h3 className="heading-h3 form_heading">Sign In to Funtlers</h3>
                <form onSubmit={handleSubmit} className="form_main">
                  <div className="Input_otr">
                    <input
                      required
                      className="Theme_input_white form_input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => setUserName(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className="Input_otr">
                    <input
                      required
                      className="Theme_input_white form_input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="Input_otr check_forget_otr">
                    <Check CheckLabel="Remember Me" />
                    <Link className="heading-s forgot_text">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="Input_otr action_otr">
                    <button
                      className="Theme_btn_primary form_btn"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <p className="heading-sb Input_otr heading_another">
                    Another way to login
                  </p>
                  <div className="google_facebok_otr">
                    <Link className="buttons_otr google_button">
                      <i class="ri-google-fill button_icon"></i>
                      <p className="heading-sb button_text">
                        Login with Google
                      </p>
                    </Link>
                    <Link className="buttons_otr facebook_button">
                      <i class="ri-facebook-circle-fill button_icon"></i>
                      <p className="heading-sb button_text">
                        Login with Facebook
                      </p>
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
