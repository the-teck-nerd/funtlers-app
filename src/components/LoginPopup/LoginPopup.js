import React, { useState } from "react";
import { Link } from "react-router-dom";
import Check from "../Check/Check";
import InnerHeader from "../InnerHeader/InnerHeader";
import "./LoginPopup.scss";
import { loginUser, setToken } from "../../api/LoginService";

let token = { state: "success" | "failed", email: "", firstName: "" };

export default function LoginPopup({ setUser, setShowLogin, ref }) {
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
    setUser(response);
    setShowLogin(false);
  };

  return (
    <div className="Login_page">
      <section className="login_main">
        <div className="container" ref={ref}>
          <div className="row row_custom">
            <div className="col-lg-6 col_form_otr">
              <div className="col_form_inr">
                <div className="cross-icon">
                  <svg
                    onClick={()=>setShowLogin(false)}
                    height="24px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="24px"
                  >
                    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                  </svg>
                </div>
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
