import React, { useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import "./Login.scss";
import LoginComponent from "../LoginComponent/LoginComponent";
import { isLoggedIn } from "../../api/LoginService";
import { useNavigate } from "react-router-dom";

export default function Login()
 {
  const [userObject, setUser] = useState(isLoggedIn());

  const navigate = useNavigate();

  if (userObject) {
    
    navigate("/", { state: userObject });
  }

  return (
    <div className="Login_page">
      {"login component"}
      <InnerHeader HeaderHeading="Log In" PageText="Login" />
      <section className="login_main">
        <div className="container">
          <div className="row row_custom">
            <div className="col-lg-6 col_form_otr">
              <div className="col_form_inr">
                <LoginComponent setUser={setUser} setShowLogin={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
