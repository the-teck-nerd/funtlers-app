import React from "react";
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";
import { useNavigate } from "react-router-dom";
import "./AdminLandingPage.scss";

function AdminLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container-landing">
      <h1 className="text-center ">Admin Dashboard</h1>
      <div className="body-landing">
        <div className="item-landing">
          <h2 className="text-center m-5">Partners</h2>
          <ThemeBtn
            onClick={() => {
              navigate("/add-partner");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="ADD NEW"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/partner-dashboard");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="EDIT EXISTING"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/partner-dashboard");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="SEE ALL"
          />
        </div>
        <div className="item-landing">
          <h2 className="text-center m-5 ">Activities</h2>
          <ThemeBtn
            onClick={() => {
              navigate("/add-activity");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="ADD NEW"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/activity-page");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="EDIT EXISTING"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/activity-page");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="SEE ALL"
          />
        </div>
        <div className="item-landing">
          <h2 className="text-center m-5">Summary</h2>
          <ThemeBtn
            onClick={() => {
              navigate("/activity-page");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="SALES HISTORY"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/add-partner");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="UNIQUE CODES"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/add-partner");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="VISITOR DATA"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminLandingPage;
