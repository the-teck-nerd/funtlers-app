import React, { useState } from "react";
import Input from "../../components/Input/Input";

import "./CustomerDashboardHeader.scss";
import { isLoggedIn, logOut } from "../../api/NewLoginService";
import DialogueBox from "../../components/DialogueBox/DialogueBox";

import ProfileImg from "../../img/profile-img.png";
import { Link } from "react-router-dom";

function CustomerDashboardHeader(props) {
  const [showConfirmDialogue, setConfirmDialogue] = useState(false);
  
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
        Are you sure you want to logout?
      </DialogueBox>
    );
  }
  return (
    <div className="dashboard_header">
      <div className="wrapper">
        <div className="profile_main">
          <div className="profile_otr">
            <div class="circle">
              <p class="circle-inner">{props?.firstName[0]}</p>
            </div>
          </div>
          <div className="profile_drop_otr">
            <ul className="profile_drop_ul">
              <p className="user_text heading-xs">Welcome {props?.firstName}</p>
              <li className="profile_drop_li">
                <Link to="/my-page" className="profile_drop_link">
                  <i class="ri-user-3-fill menu_icon"></i>
                  <p className="menu_text heading-xs">Min side</p>
                </Link>
              </li>
              <li className="profile_drop_li">
                <Link to="/edit-profile" className="profile_drop_link">
                  <i class="ri-file-list-2-fill menu_icon"></i>
                  <p className="menu_text heading-xs">Edit Profile</p>
                </Link>
              </li>
              <li className="profile_drop_li">
                <Link
                  className="profile_drop_link"
                  onClick={() => setConfirmDialogue(true)}
                >
                  <i class="ri-logout-box-fill menu_icon"></i>
                  <p className="menu_text heading-xs">Logout</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboardHeader;
