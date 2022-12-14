import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

import BrandLogo from "../../img/brand-logo.png";
import BrandLogo2 from "../../img/brand-logo-primary.png";

import { isLoggedIn, logOut } from "../../api/NewLoginService";
import LoginPopup from "../LoginPopup/LoginPopup";
import DialogueBox from "../DialogueBox/DialogueBox";

import { useLocation, useNavigate } from "react-router-dom";
import CustomerDashboardHeader from "../../Dashboard/CustomerDashboardHeader/CustomerDashboardHeader";

function Header({ setUser, userObject }) {
  const navigate = useNavigate();
  const [SideBar, setSideBar] = useState(false);

  // const [userObject, setUser] = useState(isLoggedIn());

  const SideMenuClick = () => {
    setSideBar(!SideBar);
  };
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirmDialogue, setConfirmDialogue] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const location = useLocation();

  if (location.state && showLogin === false && showConfirmDialogue === false) {
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
        title={"Bekreft utlogging"}
        onConfirm={logOut}
        onConfirmState={setUser}
        confirmText={"Logg ut"}
        cancelText={"Avbryt"}
        open={showConfirmDialogue}
        setOpen={setConfirmDialogue}
      >
        Er du sikker på at du vil logge ut?{" "}
      </DialogueBox>
    );
  }
  return (
    <>
      <header className="header_main">
        <div className="container-fluid">
          <div className="wrapper">
            <Link to="/" className="logo_otr">
              <img className="logo" src={BrandLogo} alt="logo" />
              <p className="heading-xsb logo_text p-1">
                Din markedsplass for sosiale aktiviteter
              </p>
            </Link>
            <div className="action_menu_otr">
              <ul className="menu_ul">
                <li className="menu_li">
                  <Link to="/why-choose-us" className="menu_a heading-sb">
                    Slik fungerer det
                  </Link>
                </li>
                <li className="menu_li">
                  <Link to="/terms" className="menu_a heading-sb">
                    Vilkår
                  </Link>
                </li>
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
                    Bli en partner
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
                    BtnClass="Theme_btn_light header_button"
                    BtnText="Logg inn"
                  />

                  <Link to="/register" className="action">
                    <ThemeBtn
                      BtnClass="Theme_btn_white header_button"
                      BtnText="Registrer profil"
                    />
                  </Link>
                </div>
              ) : (
                <>
                  <CustomerDashboardHeader
                    SidebarStrech={SideMenuClick}
                    setUser={setUser}
                    firstName={userObject?.user?.firstName}
                    lastName={userObject?.user?.lastName}
                  />
                </>
              )}

              <div className="menu_icon_otr" onClick={handleOpenMenu}>
                <i class="ri-menu-3-line menu_icon"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={openMenu ? "overlay_main overlay_open" : "overlay_main"}>
        <div className="overlay_wrapper">
          <div className="logo_close_otr">
            <Link to="/" className="logo_otr" onClick={handleCloseMenu}>
              <img className="logo" src={BrandLogo2} alt="logo" />
            </Link>
            <div className="close_icon_otr" onClick={handleCloseMenu}>
              <i class="ri-close-circle-fill close_icon"></i>
            </div>
          </div>
          <div className="action_menu_otr">
            <ul className="menu_ul">
              <li className="menu_li" onClick={handleCloseMenu}>
                <Link to="/about" className="menu_a heading-sb">
                  Slik fungerer det
                </Link>
              </li>
              <li className="menu_li" onClick={handleCloseMenu}>
                <Link to="/terms" className="menu_a heading-sb">
                  Vilkår
                </Link>
              </li>
              <li className="menu_li" onClick={handleCloseMenu}>
                <Link to="/about" className="menu_a heading-sb">
                  Om oss
                </Link>
              </li>
              <li className="menu_li" onClick={handleCloseMenu}>
                <Link to="/contact" className="menu_a heading-sb">
                  Kontakt oss
                </Link>
              </li>
              <li className="menu_li" onClick={handleCloseMenu}>
                <Link to="/partner" className="menu_a heading-sb">
                  Bli en partner
                </Link>
              </li>
              <li className="menu_li" onClick={handleCloseMenu}>
                <Link to="/faq" className="menu_a heading-sb">
                  Spørsmål og svar
                </Link>
              </li>
            </ul>
            {!userObject ? (
              <div className="action_otr">
                <ThemeBtn
                  onClick={() => setShowLogin(true)}
                  BtnClass="Theme_btn_primary login_btn header_button"
                  BtnText="Logg inn"
                />

                <Link
                  to="/register"
                  className="action register_btn_otr header_button"
                >
                  <ThemeBtn
                    BtnClass="Theme_btn_white"
                    BtnText="Registrer profil"
                  />
                </Link>
              </div>
            ) : (
              <div className="action_otr">
                <button
                  className="Theme_btn_primary"
                  onClick={() => {
                    navigate("/my-page");
                  }}
                >
                  <u> {userObject?.user?.firstName}</u>{" "}
                </button>
                <Link className="action">
                  <ThemeBtn
                    onClick={() => setConfirmDialogue(true)}
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
    </>
  );
}

export default Header;
