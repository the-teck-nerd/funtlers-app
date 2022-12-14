import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Select from "../../components/Select/Select";
import FetchService from "../../api/FetchService";
import "./ActivityPage.scss";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";
import Input from "../../components/Input/Input";
import CardImg1 from "../../img/search-card-img1.png";
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";

function ActivityPage({ setIsLoading }) {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  console.table(activities);

  const fetchData = () => {
    setIsLoading(true);
    let ownerid = 1;
    let apicall = FetchService.getAllActivities(ownerid);

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setActivities(data);
        setFilteredActivities(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filter = activities.filter((x) =>
      x.name.toLowerCase().includes(search)
    );
    setFilteredActivities(filter);
  }, [search]);

  return (
    <div className="activity_page_main">
      <ThemeBtn
        BtnClass="Theme_btn_primary"
        BtnText="Add Activity"
        onClick={() => {
          navigate("/add-activity");
        }}
      />

      <div className="heading_filter_otr">
        <p className="heading_activity heading-lb">Activity</p>
        <div className="filter_search_otr">
          <div className="search_otr">
            <Input
              InputClass="Theme_input_white search_input"
              Inputype="search"
              InputName="search"
              InputPlaceholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row row_custom">
        {filteredActivities.map((activity) => (
          <SearchResultCard
            activity={activity}
            IconDivClass="edit_icon_otr"
            IconClass="ri-edit-fill"
            CardImg={
              JSON.parse(activity.images)
                ? JSON.parse(activity.images)[0].imageURL
                : CardImg1
            }
            CardHeading={activity.name}
            CardDesc={activity.price + "kr pr.pers"}
          />
        ))}
      </div>
      {/* Todo: implement pagination */}
      {/* <div className="action_otr">
        <ThemeBtn
          BtnClass="Theme_btn_primary load_more_btn"
          BtnText="Load More"
        />
      </div> */}
    </div>
  );
}

export default ActivityPage;
