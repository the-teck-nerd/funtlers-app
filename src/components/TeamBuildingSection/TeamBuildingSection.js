import Input from "../Input/Input";
import Select from "../Select/Select";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./TeamBuildingSection.scss";

import FetchService from "../../api/FetchService";
 
 

function TeamBuildingSection() {
   
  

     

  return (
    <section className="Team_building_main">
      <div className="container">
        <div className="row row_custom">
          <div className="col-lg-10 col_otr">
            

            <div className="col_inpiration_inr">
              <h3 className="heading-h3 heading">
                Eller ønsker du inpirasjon?
              </h3>
              <ul className="inspiration_ul">
                <li className="inspiration_li">
                  <button className="inspiration_btn">Teambuilding</button>
                </li>
                <li className="inspiration_li">
                  <button className="inspiration_btn">Julebord</button>
                </li>
                <li className="inspiration_li">
                  <button className="inspiration_btn">Sommerfest</button>
                </li>
                <li className="inspiration_li">
                  <button className="inspiration_btn">Afterwork</button>
                </li>
                <li className="inspiration_li">
                  <button className="inspiration_btn">Online</button>
                </li>
                <li className="inspiration_li">
                  <button className="inspiration_btn">Dagsutflukt</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamBuildingSection;
