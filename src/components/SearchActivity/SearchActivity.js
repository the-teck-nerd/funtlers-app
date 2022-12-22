import Select from "../Select/Select";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchActivity.scss";

import FetchService from "../../api/FetchService";
import { getFilters } from "../../commons/activity-filters/Helpers";

let searchModal = {
  name: "",
  category: "",
  type: "",
  city: "",
  peopleNumber: "",
  budgetOptions: "",
};

function SearchActivity() {
  const navigate = useNavigate();

  const filters = getFilters();

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

    searchModal.type = type;
    searchModal.category = category;
    searchModal.budget = budget;
    searchModal.peopleNumber = peopleNumber;
    searchModal.city = city;
    

    navigate("/activities", { state: searchModal });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="Team_building_main">
      <div className="container">
        <div className="row debug">
          <div className="col-lg-10 col_otr">
            <div className="col_team_building_inr">
              <h3 className="heading-h3 heading">
                Makes teambuilding funtlier
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="activity_main">
                  <ul className="activity_ul">
                    <li className="activity_li">
                      <Select
                        options={filters.types}
                        defaultText="Acitivity Type"
                        value={type}
                        setValue={setType}
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        value={category}
                        setValue={setCategory}
                        options={filters.categories}
                        defaultText="Category"
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        value={city}
                        setValue={setCity}
                        options={filters.cities}
                        defaultText="Cities"
                        disabled={type==="digital"}
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        value={budget}
                        setValue={setBudget}
                        options={filters.budgetOptions}
                        defaultText="Budget Options"
                      />
                    </li>
                    <li className="activity_li">
                      <Select
                        setValue={setPeopleNumber}
                        value={peopleNumber}
                        options={filters.peopleNumber}
                        defaultText="Number of people"
                      />
                    </li>
                    <li className="activity_li">
                      <div className="search_icon_otr_local">
                        <button
                          class="ri-search-2-line search_icon_local"
                          type="submit"
                        ></button>
                      </div>
                    </li>
                  </ul>
                  {/* <div className="filter_otr">
                  <Select options={categories} defaultText="Number of people" />
                </div> */}
                </div>
                <div className="activity-container">
                  <p className="small"><b>Aktivitet ({activities.length})</b></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchActivity;
