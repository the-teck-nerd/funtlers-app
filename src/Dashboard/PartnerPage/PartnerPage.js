import React, { useState, useEffect } from "react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import FetchService from "../../api/FetchService";
import { useNavigate } from "react-router-dom";

import "./PartnerPage.scss";
 

import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";

function PartnerPage() {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    let apicall = FetchService.GetPartner();

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setPartners(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="partner_page_main">
      <ThemeBtn
        BtnClass="Theme_btn_primary"
        BtnText="Add Partner"
        onClick={() => {
          navigate("/add-partner");
        }}
      />

      <div className="heading_filter_otr">
        <p className="heading_activity heading-lb">Partners</p>
        <div className="filter_search_otr">
          {/* Todo: implement filter by solution */}
          {/* <div className="filter_main">
            <p className="sort_text heading-xs">Sort By:</p>
            <Select />
          </div> */}
          <div className="search_otr">
            <i class="ri-search-2-line search_icon"></i>
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
      <div className="partner_table">
        <table className="data_table">
          <thead className="table_header">
            <tr>
              <th>
                <p className="heading-xsb header_text">Partner ID</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Name</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Email</p>
              </th>
              <th>
                <p className="heading-xsb header_text">Phone</p>
              </th>
              <th>
                <p className="heading-xsb header_text">City</p>
              </th>

              <th>
                <p className="heading-xsb header_text">Partner Since</p>
              </th>
            </tr>
          </thead>

          <tbody className="table_body">
            {partners.map((partner) => (
              <tr
                onClick={() => {
                  navigate("/edit-partner", { state: partner });
                }}
                className="partner_row"
              >
                <td>
                  <p className="heading-xs body_text">{partner.id}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{partner.name}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{partner.email}</p>
                </td>
                <td>
                  <p className="heading-xsb body_text">{partner.phone}</p>
                </td>

                <td>
                  <p className="heading-xs body_text">{partner.city}</p>
                </td>
                <td>
                  <p className="heading-xs body_text">{partner.partnerSince}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PartnerPage;
