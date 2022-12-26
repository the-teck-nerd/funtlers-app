import AnalyticsCard from "../AnalyticsCard/AnalyticsCard";
import FetchService from "../../api/FetchService";
import React, { useState, useEffect } from "react";

import "./PartnerAnalyticsPage.scss";
import { isLoggedIn } from "../../api/NewLoginService";

function PartnerAnalyticsPage() {
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [userObject, setUser] = useState(isLoggedIn());
  const [filteredActivities, setFilteredActivities] = useState([]);

  const fetchData = () => {
    FetchService.GetAnalyticsById(userObject.user.id).then((data) => {
      setFilteredPartners(data.data[0]);
    });

    FetchService.GetAnalyticsActivity().then((data) => {
      setFilteredActivities(data.data);
      //Todo: filter these activities based on the currently logged in partner
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="partner_analytics_page">
      <div className="heading_otr">
        <p className="heading-lb heading_partner">Analytics</p>
      </div>

      <div className="statistics_main">
        <div className="row row_custom">
          <div className="col-lg-3 col_card_otr">
            <AnalyticsCard
              CardIcon="ri-money-dollar-circle-fill"
              CardHeading={filteredPartners.TotalEarning}
              CardName="Total Earning"
              PercentText=""
              TextColor="green_text"
            />
          </div>

          <div className="col-lg-3 col_card_otr">
            <AnalyticsCard
              CardIcon="ri-shopping-bag-fill"
              CardHeading={filteredPartners.Orders}
              CardName="Orders"
              PercentText=""
              TextColor="green_text"
            />
          </div>
          <div className="col-lg-3 col_card_otr">
            <AnalyticsCard
              CardIcon="ri-user-fill"
              CardHeading={filteredPartners.Customers}
              CardName="Customers"
              PercentText=""
              TextColor="red_text"
            />
          </div>
          <div className="col-lg-3 col_card_otr">
            <AnalyticsCard
              CardIcon="ri-file-list-fill"
              CardHeading={filteredPartners.ActivityActive}
              CardName="Active Activities"
              PercentText=""
              TextColor="green_text"
            />
          </div>
          <div className="col-lg-3 col_card_otr">
            <AnalyticsCard
              CardIcon="ri-shopping-bag-fill"
              CardHeading={filteredPartners.ActivitySold}
              CardName="Activity Sold"
              PercentText=""
              TextColor="red_text"
            />
          </div>
        </div>
      </div>

      <div className="order_page_main partner_order">
        <div className="heading_filter_otr"></div>
        <div className="order_table">
          <table className="data_table">
            <thead className="table_header">
              <tr>
                <th>
                  <p className="heading-xsb header_text">Activity Id</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Activity Name</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Total Orders</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Total Sales (NOK)</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Valid Til</p>
                </th>
              </tr>
            </thead>
            <tbody className="table_body">
              {filteredActivities.map((activity) => (
                <tr className="partner_row">
                  <td>
                    <p className="heading-xs body_text">
                      {activity.ActivityId}
                    </p>
                  </td>

                  <td>
                    <p className="heading-xs body_text">
                      {activity.ActivityName}
                    </p>
                  </td>
                  <td>
                    <p className="heading-xs body_text">
                      {activity.TotalOrders}
                    </p>
                  </td>
                  <td>
                    <p className="heading-xsb body_text">
                      {activity.TotalSales}
                    </p>
                  </td>
                  <td>
                    <p className="heading-xs body_text">
                      {activity.ExpiryDate}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PartnerAnalyticsPage;
