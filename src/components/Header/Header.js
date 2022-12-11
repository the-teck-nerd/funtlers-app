import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

import BrandLogo from "../../img/brand-logo.png";

import { isLoggedIn, logOut } from "../../api/NewLoginService";
import LoginPopup from "../LoginPopup/LoginPopup";
import DialogueBox from "../DialogueBox/DialogueBox";

import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();


  const [userObject, setUser] = useState(isLoggedIn());
 

  const [showLogin, setShowLogin] = useState(false);
  const [showConfirmDialogue, setConfirmDialogue] = useState(false);

  const location = useLocation();

  if (location.state) {
    navigate(0);
  }

  if (showLogin) {
    return (
      <div>
        <div className="backdrop">
          <LoginPopup setShowLogin={setShowLogin} setUser={setUser} />
        </div>
      </div>
    );
  }
  if (showConfirmDialogue) {
    return (
      <DialogueBox
        title={"Confirm logout"}
        onConfirm={logOut}
        onConfirmState={setUser}
        confirmText={"Logout"}
        cancelText={"Cancel"}
        open={showConfirmDialogue}
        setOpen={setConfirmDialogue}
      >
        Are you sure you want to logout?{" "}
      </DialogueBox>
    );
  }
  return (
    <header className="header_main">
      <div className="container-fluid">
        <div className="wrapper">
          <Link to="/" className="logo_otr">
            <img className="logo" src={BrandLogo} alt="logo" />
            <p className="heading-xsb logo_text">
              Din markedsplass for sosiale aktiviteter
            </p>
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
            {!userObject ? (
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
               <button className="Theme_btn_primary" onClick={()=>{ navigate("/my-page");}}> <u> {userObject?.user?.firstName}</u> </button>
                <Link className="action">
                  <ThemeBtn
                    onClick={() => setConfirmDialogue(true)}
                    BtnClass="Theme_btn_white"
                    BtnText="Log Out"
                  />
                </Link>
              </div>
            )}
            { }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
