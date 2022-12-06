import InnerHeader from "../InnerHeader/InnerHeader";
import SearchResultCard from "../SearchResultCard/SearchResultCard";
import Select from "../Select/Select";
import React, { useEffect, useState } from "react";
import FetchService from "../../api/FetchService";
import {
  getFilters,
  getNumberOfPeopleOptions,
  getFilteredActivities,
} from "../../commons/activity-filters/Helpers";
import { useLocation } from "react-router-dom";
import "./SearchResultPage.scss";

let filterModal = {
  category: "all",
  type: "all",
  city: "all",
  peopleNumber: "all",
  budget: "all",
};

function SearchResultPage() {
  const searchFilter = useLocation().state;

  const filters = getFilters();
  const [city, setCity] = useState(searchFilter?.city);
  const [type, setType] = useState(searchFilter?.type);
  const [category, setCategory] = useState(searchFilter?.category);
  const [peopleNumber, setPeopleNumber] = useState(searchFilter.peopleNumber);
  const [budget, setBudget] = useState(searchFilter.budget);

  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const [visible, setVisible] = useState(8);

  const fetchData = () => {
    let ownerid = 1;
    let apicall = FetchService.getAllActivities(ownerid);

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setActivities(data);
        setFilteredActivities(data);
        debugger;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterModal.category = category===""?"all" : category;
    filterModal.type = type===""?"all" : type;
    filterModal.city = city===""?"all" : city;
    filterModal.peopleNumber = peopleNumber===""? "all": peopleNumber;
    filterModal.budget = budget===""?"all": budget;

    setFilteredActivities(getFilteredActivities(activities, filterModal));
  }, [city, type, category, peopleNumber, budget]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
  };

  return (
    <div className="searchRsult_page">
      <InnerHeader
        HeaderHeading="Søkeresultat fysisk"
        PageText="Søkeresultat fysisk"
      />
      <div className="searchRsult_main">
        <div className="container">
          <div className="wrapper">
            <h3 className="heading-h3 filter_heading">
              Aktivitet (
              {filteredActivities.length > 0 ? filteredActivities.length : 0})
            </h3>
            <div className="filter_main">
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
                </ul>
              </div>
              <div className="filter_otr">
                <Select defaultText="Flere filtere" />
              </div>
              {/* <div className='relevent_select_otr'>
                                <Select
                                    defaultText="Vis: Mest relevant"
                                />
                            </div> */}
            </div>
          </div>
          <div className="row row_custom">
            {filteredActivities?.slice(0, visible).map((activity) => (
              <SearchResultCard
                CardImg={
                  activity.images
                    ? JSON.parse(activity.images)?.[0].imageURL
                    : "/static/media/search-card-img1.24ac83481c42dc337b40.png"
                }
                CardHeading={activity.name}
                CardDesc={activity.description}
                Data={activity}
              />
            ))}
          </div>
          <div className="action_otr">
            <button onClick={showMoreItems} className="Theme_btn_primary">
              {"Load More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultPage;
