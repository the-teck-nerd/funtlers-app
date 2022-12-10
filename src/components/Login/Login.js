import React, { useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import "./Login.scss";
import LoginComponent from "../LoginComponent/LoginComponent";
import { isLoggedIn } from "../../api/LoginService";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

export default function Login() {
  const [userObject, setUser] = useState(isLoggedIn());
  const [isLoading, setIsLoading]= useState(false);
  

  const navigate = useNavigate();

  if (userObject) {
    navigate("/", { state: userObject });
  }

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Processing your request..."
    >
      <div className="Login_page">
        <InnerHeader HeaderHeading="Log In" PageText="Login" />
        <section className="login_main">
          <div className="container">
            <div className="row row_custom">
              <div className="col-lg-6 col_form_otr">
                <div className="col_form_inr">
                  <LoginComponent setUser={setUser} setIsLoading={setIsLoading} setShowLogin={() => {}} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LoadingOverlay>
  );
}
