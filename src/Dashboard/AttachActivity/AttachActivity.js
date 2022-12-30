import React, { useState, useEffect } from "react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import FetchService from "../../api/FetchService";
import { useNavigate } from "react-router-dom";

import "./AttachActivity.scss";

import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";

function AttachActivity({ setShowPopup, setPartnerID, setPartnerName }) {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    let apicall = FetchService.GetPartner();

    apicall
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setPartners(data);
        setFilteredPartners(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filter = partners.filter(
      (x) =>
        x.name.toLowerCase().includes(search) ||
        x.id.toString().includes(search)
    );
    setFilteredPartners(filter);
  }, [search]);

  return (
    <div className="partner_page_main attach_activity">
      <div className="heading_filter_otr">
        <p className="heading_activity heading-lb">Partnere</p>
        <div className="filter_search_otr">
          <div className="search_otr">
            <i class="ri-search-2-line search_icon"></i>
            <Input
              InputClass="Theme_input_white search_input"
              Inputype="search"
              InputName="search"
              InputPlaceholder="Search by Id or name"
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
            </tr>
          </thead>

          <tbody className="table_body">
            {filteredPartners.map((partner) => (
              <tr
                onClick={() => {
                  setPartnerID(partner.id);
                  setPartnerName(partner.name);
                  setShowPopup(false);
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="Input_otr action_otr">
        <button
          onClick={() => setShowPopup(false)}
          className="Theme_btn_primary form_btn"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AttachActivity;
