import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";
import React, { useEffect, useState } from "react";
import FetchService from "../../api/FetchService";

import { useLocation } from "react-router-dom";
import "./PartnerActivities.scss";
import bookingImg from "../../img/booking-confirmation-img.png";
import LoadingOverlay from "react-loading-overlay";
import InnerHeader from "../../components/InnerHeader/InnerHeader";
import Input from "../../components/Input/Input";
import { isLoggedIn } from "../../api/NewLoginService";

function PartnerActivities({ setIsLoading }) {
  const partner = useLocation()?.state ?? isLoggedIn()?.user;

  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const [visible, setVisible] = useState(8);

  const [search, setSearch] = useState("");

  const fetchData = () => {
    setIsLoading(true);

    let apicall = FetchService.GetAllActivitiesByPartnerId(partner.id);

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setActivities(data);
        setFilteredActivities(data);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredActivities(
      activities.filter((x) => x.name.toLowerCase().includes(search))
    );
  }, [search]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
  };

  return (
    
     
      <div className="searchRsult_page">
        <div className="wrapper">
          <div className="filter_main">
            <div className="search_otr">
              <Input
                InputClass="Theme_input_white search_input"
                Inputype="search"
                InputName="search"
                InputPlaceholder="Search by name"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
          <h3 className="heading filter_heading">
            Aktivitet (
            {filteredActivities.length > 0 ? filteredActivities.length : 0})
          </h3>
        </div>
        <div className="row row_custom">
          {filteredActivities?.slice(0, visible).map((activity) => (
            <>
              <SearchResultCard
                CardImg={
                  activity.images
                    ? JSON.parse(activity.images)?.[0].imageURL
                    : bookingImg
                }
                CardHeading={activity.name}
                CardDesc={activity.description}
                Data={activity}
                source="customer"
              />
            </>
          ))}
        </div>

        {activities.length > 8 && (
          <div className="action_otr">
            <button onClick={showMoreItems} className="Theme_btn_primary">
              {"Load More"}
            </button>
          </div>
        )}
      </div>
    
  );
}

export default PartnerActivities;
