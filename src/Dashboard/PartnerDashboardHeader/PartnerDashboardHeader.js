import React, { useState } from "react";
import Input from "../../components/Input/Input";

import "./PartnerDashboardHeader.scss";
import { isLoggedIn, logOut } from "../../api/NewLoginService";
import DialogueBox from "../../../src/components/DialogueBox/DialogueBox";

import ProfileImg from "../../img/profile-img.png";
import { Link } from "react-router-dom";

function PartnerDashboardHeader(props) {
  const [showConfirmDialogue, setConfirmDialogue] = useState(false);
  // const [userObject, setUser] = useState(isLoggedIn());

  

  if (showConfirmDialogue) {
    return (
      <DialogueBox
        title={"Confirm logout"}
        onConfirm={logOut}
        onConfirmState={props.setUser}
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
    
    <div className="dashboard_header">
      <div className="wrapper">
        <div className="sidebar_menu_icon_otr" onClick={props.SidebarStrech}>
          <i class="ri-menu-3-line sidebar_menu_icon"></i>
        </div>
        <div className="search_otr">
          <i class="ri-search-2-line search_icon"></i>
          <Input
            InputClass="Theme_input_white search_input"
            Inputype="search"
            InputName="search"
            InputPlaceholder="Search"
          />
        </div>
        <div className="profile_main">
          <div className="profile_otr">
            <img className="profile_img" src={ProfileImg} alt="img" />
            <p className="user_name heading-sb">Jennifer Alnes</p>
          </div>
          <div className="profile_drop_otr">
            <ul className="profile_drop_ul">
              <p className="user_text heading-xs">Welcome Jennifer Alnes</p>
              <li className="profile_drop_li">
                <Link to="/profile" className="profile_drop_link">
                  <i class="ri-user-3-fill menu_icon"></i>
                  <p className="menu_text heading-xs">Profile</p>
                </Link>
              </li>
              <li className="profile_drop_li">
                <Link className="profile_drop_link"    onClick={() => setConfirmDialogue(true)}>
                  <i class="ri-logout-box-fill menu_icon"></i>
                  <p className="menu_text heading-xs" >Logout</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerDashboardHeader;
