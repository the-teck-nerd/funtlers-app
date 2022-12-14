import React from "react";
import Input from "../../components/Input/Input";
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";

import "./EditProfilePage.scss";

import ProfileImg from "../../img/profile-img.png";

function EditProfilePage() {
  return (
    <div className="profile_page_main profile_edit_page_main">
      <div className="profile_img_content_main">
        <div className="img_content_otr">
          <div className="img_otr">
            <img className="profile_img" src={ProfileImg} alt="img" />
          </div>
          <div className="content_otr">
            <h3 className="user_name heading-h3">Jennifer Alnes</h3>
            <p className="designation_text heading-s">Owner & Founder</p>
            <div className="location_otr">
              <i class="ri-map-pin-fill location_icon"></i>
              <p className="location_text heading-xs">
                Oslo, Norway
              </p>
            </div>
          </div>
        </div>
        <button className="edit_btn_otr">
          <i class="ri-save-3-fill btn_icon"></i>
          <p className="btn_text heading-xsb">Save Changes</p>
        </button>
      </div>
      <div className="info_main">
        <p className="info_heading heading-lb">Profile Info</p>
        <form className="form_main">
          <ul className="info_ul">
            <li className="info_li">
              <label className="heading-xsb input_label">Full Name :</label>
              <Input
                InputClass="Theme_input_white form_input"
                Inputype="fullname"
                InputName="fullname"
                InputPlaceholder="Jennifer Alnes"
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">Phone Number :</label>
              <Input
                InputClass="Theme_input_white form_input"
                Inputype="number"
                InputName="number"
                InputPlaceholder="+47 47880198"
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">E-mail :</label>
              <Input
                InputClass="Theme_input_white form_input"
                Inputype="email"
                InputName="email"
                InputPlaceholder="jennifer.alnes@funtlers.com"
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">Address :</label>
              <Input
                InputClass="Theme_input_white form_input"
                Inputype="address"
                InputName="address"
                InputPlaceholder="Oslo, Norway"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;
