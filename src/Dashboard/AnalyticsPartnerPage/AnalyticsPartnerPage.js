import FetchService from "../../api/FetchService";
import React, { useState, useEffect } from "react";

import "./AnalyticsPartnerPage.scss";

function AnalyticsPartnerPage() {
  const [filteredPartners, setFilteredPartnerss] = useState([]);

  const fetchData = () => {
    FetchService.GetAnalyticsPartner().then((data) => {
      setFilteredPartnerss(data.data);
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
                <p className="heading-xsb header_text">Partner Id</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Partner Name</p>
              </th>
              <th>
                <p className="heading-xsb header_text">City</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Total Orders</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Total Sales (NOK)</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Total Activities</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Partner Since</p>
              </th>
            </tr>
          </thead>
          <tbody className="table_body">
            {filteredPartners.map((partner) => (
              <tr className="partner_row">
                <td>
                  <p className="heading-xs body_text">{partner.PartnerId}</p>
                </td>

                <td>
                  <p className="heading-xs body_text">{partner.PartnerName}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{partner.City}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{partner.TotalOrders}</p>
                </td>
                <td>
                  <p className="heading-xsb body_text">{partner.TotalSales}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">
                    {partner.TotalActivities}
                  </p>
                </td>
                <td>
                  <p className="heading-xs body_text">{partner.PartnerSince}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AnalyticsPartnerPage;
