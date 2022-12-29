import React, { useState, useEffect } from "react";
import Select from "../../components/Select/Select";
import FetchService from "../../api/FetchService";

import "./OrderPage.scss";

import ProfileImg from "../../img/profile-img.png";
import { Link } from "react-router-dom";

function OrderPage({ setIsLoading }) {
  const [filteredPartners, setFilteredPartners] = useState([]);

  const fetchData = () => {
    FetchService.GetOrderByPartnerId(1, "all").then((data) => {
      setFilteredPartners(data.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className="order_page_main">
      <div className="heading_filter_otr">
        <p className="heading_activity heading-lb">Ordre</p>
        <div className="filter_main">
          <p className="sort_text heading-xs">Sort By:</p>
          <Select />
        </div>
      </div>
      <div className="order_table">
        <table className="data_table">
          <thead className="table_header">
            <tr>
              <th>
                <p className="heading-xsb header_text">Ordre Nummer</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Kundenavn</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Partner</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Kode</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Aktivitet</p>
              </th>
              <th>
                <p className="heading-xsb header_text">By</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Pris</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Action</p>
              </th>
            </tr>
          </thead>
          <tbody className="table_body">
            {filteredPartners.map((obj) => (
              <tr>
                <td>
                  <p className="heading-xs body_text">{obj.Id}</p>
                </td>
                <td>
                  <div className="profile_otr">
                    <img className="profile_img" src={ProfileImg} alt="img" />
                    <p className="heading-xs profile_name">
                      {obj.FirstName} {obj.LastName}
                    </p>
                  </div>
                </td>
                <td>
                  <p className="heading-xs body_text">{obj.PartnerName}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{obj.Code}</p>
                </td>
                <td>
                  <p className="heading-xsb body_text">{obj.ActivityName}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{obj.City}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{obj.price} nok</p>
                </td>
                <td>
                  <div className="icon_otr">
                    <Link to="/edit-order" className="icon_inr">
                      <i class="ri-edit-fill edit_icon"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderPage;
