import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import { useLocation, useNavigate } from "react-router-dom";
import FetchService from "../../api/FetchService";

import "./CustomerPage.scss";

import ProfileImg from "../../img/profile-img.png";
import { isLoggedIn } from "../../api/NewLoginService";
import InnerHeader from "../InnerHeader/InnerHeader";

function CustomerPage() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filterOptions, setFilterOptions] = useState("showAll");

  const [user] = useState(isLoggedIn);
  const navigate = useNavigate();

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
        setOrders(data);
        setFilteredOrders(data);
      });
  };

  const [search, setSearch] = useState("");

  useEffect(() => {
    let filters = orders.filter((x) => {
      return JSON.stringify(x).indexOf(search) > 0 || search == "";
    }); 
    if (filterOptions !== "showAll") {
      filters = filters.filter(
        (x) =>
          (filterOptions === "showValid" && x.isValid) ||
          (filterOptions === "showExpired" && !x.isValid)
      );
    }
    setFilteredOrders(filters);
  }, [search, filterOptions]);

  return (
    <div className="my_page_main">
      <InnerHeader HeaderHeading="Min side" PageText="Min side" />

      <div className="container">
        <div className="partner_page_main">
          <div className="heading_filter_otr">
            <p className="heading_activity heading-lb">My Orders</p>
            <div className="filter_search_otr">
              <div className="search_otr">
                <i class="ri-search-2-line search_icon"></i>
                <Input
                  InputClass="Theme_input_white search_input"
                  Inputype="search"
                  InputName="search"
                  InputPlaceholder="Search"
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="partner_table">
            <RadioGroup
              setFilterOptions={setFilterOptions}
              filterOptions={filterOptions}
            />
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
                {filteredOrders.map((order) => (
                  <tr
                    className="table-row"
                    onClick={() => {
                      navigate("/ordered-activity", { state: order });
                    }}
                  >
                    <td>
                      <p className="heading-xs body_text">{order?.OrderId}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.Name}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.Code}</p>
                    </td>
                    <td>
                      <p className="heading-xsb body_text">
                        {order?.IsConsumed ? "Yes" : "No"}
                      </p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">
                        {order?.CreatedDate?.slice(0, 10)}
                      </p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">{order?.Quantity}</p>
                    </td>
                    <td>
                      <p className="heading-xs body_text">
                        {order?.TotalAmount}
                      </p>
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

function RadioGroup({ setFilterOptions, filterOptions }) {
  return (
    <div className="radio-group">
      <label className="radio" onClick={()=> setFilterOptions("showAll")}>
        <input
          type="radio"
          name="filter"
          defaultChecked={filterOptions === "showAll"}
        />
        {"Show all"}
      </label>
      <label className="radio" onClick={()=>setFilterOptions("showValid")}>
        <input
          type="radio"
          name="filter"
          defaultChecked={filterOptions === "showValid"}
        />
        {"Used Activities"}
      </label>
      <label className="radio" onClick={()=>setFilterOptions("showExpired")}>
        <input
          type="radio"
          name="filter"
          defaultChecked={filterOptions === "showExpired"}
        />
        {"Future Activities"}
      </label>
    </div>
  );
}

export default CustomerPage;
