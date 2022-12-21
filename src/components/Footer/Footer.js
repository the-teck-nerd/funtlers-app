import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import BrandLogo from "../../img/brand-logo.png";
import Input from "../Input/Input";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <>
      <section className="footer_main">
        <div className="container">
          <div className="row row_custom">
            <div className="col-lg-6 col-md-6 col-sm-6 col_logo_otr">
              <div className="col_logo_inr">
                <Link to="/" className="logo_otr">
                  <img className="logo" src={BrandLogo} alt="logo" />
                </Link>

                <p className="desc2 heading-m">
                  Din markedsplass for sosiale aktiviter
                </p>
                <p className="desc2">
                  FUNTLERS AS
                  <br />
                  930 276 367
                  <br />
                  Orestien 30C, 1387 Asker
                  <br />
                  Vilkår
                </p>
                <ul className="social_ul">
                  <li className="social_li">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href={"https://www.facebook.com/Funtlers-103331339270078"}
                      className="social_a"
                    >
                      <i class="ri-facebook-circle-fill social_icon"></i>
                    </a>
                  </li>
                  <li className="social_li">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href={"https://www.instagram.com/funtlers/?hl=en"}
                      className="social_a"
                    >
                      <i class="ri-instagram-fill social_icon"></i>
                    </a>
                  </li>
                  <li className="social_li">
                    <Link className="social_a">
                      <i class="ri-snapchat-fill social_icon"></i>
                    </Link>
                  </li>
                  <li className="social_li">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href={"https://www.linkedin.com/company/funtlers/"}
                      className="social_a"
                    >
                      <i class="ri-linkedin-fill social_icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col_link_otr">
              <div className="col_link_inr">
                <h3 className="heading-h3 heading">Viktige lenker</h3>
                <ul className="link_ul">
                  <li className="link_li" onClick={scrollToTop}>
                    <Link to="/contact" className="heading-s link_a">
                      Kontakt
                    </Link>
                  </li>
                  <li className="link_li" onClick={scrollToTop}>
                    <Link to="/about" className="heading-s link_a">
                      Om oss
                    </Link>
                  </li>
                  <li className="link_li" onClick={scrollToTop}>
                    <Link to="/partner" className="heading-s link_a">
                      Bli partner
                    </Link>
                  </li>
                  <li className="link_li" onClick={scrollToTop}>
                    <Link to="/contact" className="heading-s link_a">
                      Vanlige spørsmål
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col_sub_otr">
              <div className="col_sub_inr">
                <h3 className="heading-h3 heading_sub">
                  Abonner på vårt nyhetsrev!
                </h3>
                <p className="heading-s desc_sub">
                  Få de ferskeste oppdateringene fra oss
                </p>
                <form className="form_otr">
                  <Input
                    InputClass="Theme_input_light"
                    Inputype="email"
                    InputName="email"
                    InputPlaceholder="Din mail her"
                  />
                  <ThemeBtn BtnClass="Theme_btn_white" BtnText="Abonner nå" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copy_right_main">
          <div className="container">
            <div className="wrapper">
              <p className="heading-s cr_text">
                Copyright © 2022{" "}
                <Link to="/" className="heading-sb cr_text_inr">
                  FUNTLERS
                </Link>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
