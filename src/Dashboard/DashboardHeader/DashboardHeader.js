import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { useLocation, useNavigate } from "react-router-dom";

import "./DashboardHeader.scss";
import { isLoggedIn, logOut } from "../../api/NewLoginService";
import DialogueBox from "../../../src/components/DialogueBox/DialogueBox";

import ProfileImg from "../../img/profile-img.png";
import { Link } from "react-router-dom";

function DashboardHeader(props) {
  const [showConfirmDialogue, setConfirmDialogue] = useState(false);
  const navigate = useNavigate();

  // const [userObject, setUser] = useState(isLoggedIn());
  const Profile = async () => {
    navigate("/profile", { state: props?.userObject?.user });
  };

  if (showConfirmDialogue) {
    return (
      <DialogueBox
        title={"Bekreft utlogging"}
        onConfirm={logOut}
        onConfirmState={props.setUser}
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
            <p class="circle-inner">{props?.userObject?.user?.firstName[0]}</p>
            <p className="user_name heading-sb">
              {props?.userObject?.user?.firstName}
            </p>
          </div>
          <div className="profile_drop_otr">
            <ul className="profile_drop_ul">
              <p className="user_text heading-xs">
                Welcome {props?.userObject?.user?.firstName}&nbsp;
                {props?.userObject?.user?.lastName}
              </p>
              <li className="profile_drop_li">
                <a
                  onClick={() => {
                    Profile();
                  }}
                  className="profile_drop_link"
                >
                  <i class="ri-user-3-fill menu_icon"></i>
                  <p className="menu_text heading-xs">Profile</p>
                </a>
              </li>
              <li className="profile_drop_li">
                <Link to="/" className="profile_drop_link">
                  <i class="ri-file-list-2-fill menu_icon"></i>
                  <p className="menu_text heading-xs">Activity</p>
                </Link>
              </li>
              <li className="profile_drop_li">
                <Link className="profile_drop_link">
                  <i class="ri-settings-3-fill menu_icon"></i>
                  <p className="menu_text heading-xs">Setting</p>
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

export default DashboardHeader;
