import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";

import FetchService from "../../api/FetchService";

import "./CustomerPage.scss";

import ProfileImg from "../../img/profile-img.png";
import { isLoggedIn } from "../../api/NewLoginService";
import InnerHeader from '../InnerHeader/InnerHeader';

function CustomerPage() {
  const [orders, setOrders] = useState([]);
  const [user] = useState(isLoggedIn);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let apicall = FetchService.GetOrdersByUserId(user?.user?.id);

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // data.data=[{"id":1,"name":"string","price":0,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":true,"ownerID":1,"activityType":"string"},{"id":2,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null},{"id":3,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null}];
        setOrders(data); 
      });
  };

  return (
    <div className="my_page_main">
      <InnerHeader
        HeaderHeading="My Page"
        PageText="My Page"
      />

      <div className="container">
        <div className="partner_page_main">
          <div className="heading_filter_otr">
            <p className="heading_activity heading-lb">My Orders</p>
            <div className="filter_search_otr">
              <div className="filter_main">
                <p className="sort_text heading-xs">Sort By:</p>
                <Select />
              </div>
              <div className="search_otr">
                <i class="ri-search-2-line search_icon"></i>
                <Input
                  InputClass="Theme_input_white search_input"
                  Inputype="search"
                  InputName="search"
                  InputPlaceholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="partner_table">
            <table className="data_table">
              <thead className="table_header">
                <tr>
                  <th>
                    <p className="heading-xsb header_text">Order ID</p>
                  </th>
                  <th>
                    <p className="heading-xsb header_text">Activity</p>
                  </th>
                  <th>
                    <p className="heading-xsb header_text">Verification Code</p>
                  </th>
                  <th>
                    <p className="heading-xsb header_text">Is Verified</p>
                  </th>
                  <th>
                    <p className="heading-xsb header_text">Created Date</p>
                  </th>
                  <th>
                    <p className="heading-xsb header_text">Number of People</p>
                  </th>
                  <th>
                    <p className="heading-xsb header_text">Amount</p>
                  </th>
                </tr>
              </thead>
              <tbody className="table_body">
                {orders.map((order) => (
                  <tr>
                    <td>
                      <p className="heading-xs body_text">{order?.orderId}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.name}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.code}</p>
                    </td>
                    <td>
                      <p className="heading-xsb body_text">{order?.isConsumed ? "Yes" : "No"}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.createdDate}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.quantity}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.totalAmount}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
