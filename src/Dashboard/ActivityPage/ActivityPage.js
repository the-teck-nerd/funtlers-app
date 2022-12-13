import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Select from "../../components/Select/Select";
import FetchService from "../../api/FetchService";
import "./ActivityPage.scss";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";

import CardImg1 from "../../img/search-card-img1.png";
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";

function ActivityPage() {
  const [activities, setActivities] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    fetchData();
  }, []);

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
        <div className="filter_main">
          <p className="sort_text heading-xs">Sort By:</p>
          <Select />
        </div>
      </div>
      <div className="row row_custom">
        {activities.map((activity) => (
          <SearchResultCard
            IconDivClass="edit_icon_otr"
            IconClass="ri-edit-fill"
            CardImg={activity.imagePath ?? CardImg1}
            CardHeading={activity.name}
            CardDesc={activity.price+"kr pr.pers.\n"}
          />
        ))}
      </div>
      <div className="action_otr">
        <ThemeBtn
          BtnClass="Theme_btn_primary load_more_btn"
          BtnText="Load More"
        />
      </div>
    </div>
  );
}

export default ActivityPage;
