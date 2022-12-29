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
          <h2 className="text-center m-5">Partnere</h2>
          <ThemeBtn
            onClick={() => {
              navigate("/add-partner");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Legg til"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/partner-dashboard");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Rediger"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/partner-dashboard");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Se alle"
          />
        </div>
        <div className="item-landing">
          <h2 className="text-center m-5 ">Aktiviteter</h2>
          <ThemeBtn
            onClick={() => {
              navigate("/add-activity");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Legg til"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/activity-page");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Rediger"
          />
          <ThemeBtn
            onClick={() => {
              navigate("/activity-page");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Se alle"
          />
        </div>
        <div className="item-landing">
          <h2 className="text-center m-5">Sammendrag</h2>
          <ThemeBtn
            onClick={() => {
              navigate("/order");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Salg historikk"
          />
          <ThemeBtn
            onClick={() => {
              alert("No unique codes found");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Unike koder"
          />
          <ThemeBtn
            onClick={() => {
              alert("No Google Analytics embedded");
            }}
            BtnClass="Theme_btn_primary "
            BtnText="Besøksdata"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminLandingPage;
