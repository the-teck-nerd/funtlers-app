import React, { useState, useEffect } from "react";

import "./PartnerProfilePage.scss";

import ProfileImg from "../../img/profile-img.png";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Select from "../../components/Select/Select";
import { useLocation, useNavigate } from "react-router-dom";
import FetchService from "../../api/FetchService";
import { isLoggedIn } from "./../../api/NewLoginService";

function PartnerProfilePage() {
  const [userObject, setLoginUser] = useState(isLoggedIn());

  useEffect(() => {



  
  }, []);

 
  return (
    <div className="profile_page_main">
      <div className="profile_img_content_main">
        <div className="img_content_otr">
          <div className="img_otr">
          <div class="circle2">
              <p class="circle2-inner">{userObject?.user?.firstName[0]}</p>
            </div>          </div>
          <div className="content_otr">
            <h3 className="user_name heading-h3">
              {userObject.user.firstName} {userObject.user.lastName}
            </h3>
            <p className="designation_text heading-s">Partner</p>
            <div className="location_otr">
              <i class="ri-map-pin-fill location_icon"></i>
              <p className="location_text heading-xs">Oslo, Norway</p>
            </div>
          </div>
        </div>
      
      </div>
      <div className="info_main">
        <p className="info_heading heading-lb">Profile Info</p>
        <form className="form_main">
          <ul className="info-ul">
            <li className="info_li">
              <label className="heading-xsb input_label">Full Name :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="fullname"
                InputName="fullname"
                InputPlaceholder={userObject.user.firstName + " " + userObject.user.lastName}
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">Phone Number :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="number"
                InputName="number"
                InputPlaceholder={userObject.user.phone}
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">E-mail :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="email"
                InputName="email"
                InputPlaceholder={userObject.user.email}
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">Address :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="address"
                InputName="address"
                InputPlaceholder={userObject.user.address}
              />
            </li>
          </ul>
        </form>
      </div>
  
    </div>
  );
}

export default PartnerProfilePage;
