import Input from "../Input/Input";
import Select from "../Select/Select";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./TeamBuildingSection.scss";

import FetchService from "../../api/FetchService";
import {
  getAllActivityCategories,
  getAllActivityTypes,
  getAllCities,
  getBudgetOptions,
  getNumberOfPeopleOptions,
} from "../../commons/activity-filters/Helpers";

let searchModal = {
  name: "",
  category: "",
  type: "",
  city: "",
  peopleNumber: "",
  budgetOptions: "",
};

function TeamBuildingSection() {
  const navigate = useNavigate();

  const cities = getAllCities();
  const activityTypes = getAllActivityTypes();
  const categories = getAllActivityCategories();
  const peopleOptions = getNumberOfPeopleOptions();
  const budgetOptions = getBudgetOptions();

  const [searchBar, setSearchBar] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [budget, setBudget] = useState("");

  const [activities, setActivities] = useState([]);
  

  const fetchData = () => {
    let ownerid = 1;
    let apicall = FetchService.getAllActivities(ownerid);

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setActivities(data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    searchModal.name = searchBar;
    searchModal.type = type;
    searchModal.category = category;
    searchModal.budget = budget;
    searchModal.peopleNumber = peopleNumber;
    searchModal.city = city;
    debugger;

    navigate("/activities", { state: searchModal });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="Team_building_main">
      <div className="container">
        <div className="row row_custom">
          <div className="col-lg-10 col_otr">
            <div className="col_team_building_inr">
              <h3 className="heading-h3 heading">
                Makes teambuilding funtlier
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="search_otr">
                  <input
                    placeholder="Vet du hvilken aktivitet du vil gjøre"
                    name="search"
                    type="search"
                    className="Theme_input_white search_input"
                    onChange={(e) => setSearchBar(e.target.value)}
                  />
                  <div className="search_icon_otr">
                    <button
                      class="ri-search-2-line search_icon"
                      type="submit"
                    ></button>
                  </div>
                </div>
                <h3 className="heading-lb heading activity_heading">
                  Aktivitet ({activities.length})
                </h3>
                <div className="activity_main">
                  <ul className="activity_ul">
                    <li className="activity_li">
                      <Select
                        options={activityTypes}
                        defaultText="Acitivity Type"
                        value={type}
                        setValue={setType}
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        value={category}
                        setValue={setCategory}
                        options={categories}
                        defaultText="Category"
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        value={city}
                        setValue={setCity}
                        options={cities}
                        defaultText="Cities"
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        value={budget}
                        setValue={setBudget}
                        options={budgetOptions}
                        defaultText="Budget Options"
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        setValue={setPeopleNumber}
                        value={peopleNumber}
                        options={peopleOptions}
                        defaultText="Number of people"
                      />
                    </li>
                  </ul>
                  {/* <div className="filter_otr">
                  <Select options={categories} defaultText="Number of people" />
                </div> */}
                </div>
              </form>
            </div>

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
