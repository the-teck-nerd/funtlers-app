import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

import BrandLogo from "../../img/brand-logo.png";

import { isLoggedIn, logOut } from "../../api/LoginService";
import LoginPopup from "../LoginPopup/LoginPopup";
import Backdrop from "@mui/material/Backdrop";

function Header() {
  const [user, setUser] = useState(isLoggedIn());
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLogin}
      >
        <LoginPopup setShowLogin={setShowLogin} setUser={setUser} />
      </Backdrop>
    );
  }
  return (
    <header className="header_main">
      <div className="container-fluid">
        <div className="wrapper">
          <Link to="/" className="logo_otr">
            <img className="logo" src={BrandLogo} alt="logo" />
          </Link>
          <div className="action_menu_otr">
            <ul className="menu_ul">
              <li className="menu_li">
                <Link to="/about" className="menu_a heading-sb">
                  Om oss
                </Link>
              </li>
              <li className="menu_li">
                <Link to="/contact" className="menu_a heading-sb">
                  Kontakt
                </Link>
              </li>
              <li className="menu_li">
                <Link to="/partner" className="menu_a heading-sb">
                  Partner
                </Link>
              </li>
              <li className="menu_li">
                <Link to="/faq" className="menu_a heading-sb">
                  Spørsmål og svar
                </Link>
              </li>
            </ul>
            {!user ? (
              <div className="action_otr">
                <ThemeBtn
                  onClick={() => setShowLogin(true)}
                  BtnClass="Theme_btn_light"
                  BtnText="Login"
                />

                <Link to="/register" className="action">
                  <ThemeBtn BtnClass="Theme_btn_white" BtnText="Register" />
                </Link>
              </div>
            ) : (
              <div className="action_otr">
                <u> {user?.firstName}</u>
                <Link className="action">
                  <ThemeBtn
                    onClick={() => logOut(setUser)}
                    BtnClass="Theme_btn_white"
                    BtnText="Log Out"
                  />
                </Link>
              </div>
            )}
            {}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
