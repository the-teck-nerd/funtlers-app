import FetchService from "../../api/FetchService";
import React, { useState, useEffect } from "react";

import "./AnalyticsActivityPage.scss";
import { isLoggedIn } from "../../api/NewLoginService";

function AnalyticsActivityPage() {
  const [filteredActivities, setFilteredActivities] = useState([]);

  const fetchData = () => {
    FetchService.GetAnalyticsActivity().then((data) => {
      setFilteredActivities(data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
                  <p className="heading-xs body_text">{activity.ActivityId}</p>
                </td>

                <td>
                  <p className="heading-xs body_text">
                    {activity.ActivityName}
                  </p>
                </td>
                <td>
                  <p className="heading-xs body_text">{activity.TotalOrders}</p>
                </td>
                <td>
                  <p className="heading-xsb body_text">{activity.TotalSales}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{activity.ExpiryDate}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnalyticsActivityPage;
