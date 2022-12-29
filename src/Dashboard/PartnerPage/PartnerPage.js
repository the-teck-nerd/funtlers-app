import React, { useState, useEffect } from "react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import FetchService from "../../api/FetchService";
import { useNavigate } from "react-router-dom";

import "./PartnerPage.scss";

import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";

function PartnerPage({ setIsLoading }) {
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
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    setIsLoading(true);
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
    <div className="partner_page_main partner_page_main_da">
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
              InputPlaceholder="SØK"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <ThemeBtn
            BtnClass="Theme_btn_primary"
            BtnText="Legg til parter"
            onClick={() => {
              navigate("/add-partner");
            }}
          />
        </div>
      </div>
      <div className="partner_table">
        <div className="partner_table_inr">
          <table className="data_table">
            <thead className="table_header">
              <tr>
                <th>
                  <p className="heading-xsb header_text">Partner ID</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Navn</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Email</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Telefon</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">By</p>
                </th>

                <th>
                  <p className="heading-xsb header_text">Partner side</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Action</p>
                </th>
              </tr>
            </thead>

            <tbody className="table_body">
              {filteredPartners.map((partner) => (
                <tr className="partner_row">
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
                    <p className="heading-xs body_text">
                      {partner.partnerSince}
                    </p>
                  </td>
                  <td>
                    <div className="action_otr">
                      <ThemeBtn
                        BtnClass="Theme_btn_primary partner-page-button activity"
                        BtnText="Aktiviteter"
                        onClick={() => {
                          navigate("/partner-activities", { state: partner });
                        }}
                      />
                      <ThemeBtn
                        BtnClass="Theme_btn_primary partner-page-button order"
                        BtnText="Ordre"
                        onClick={() => {
                          navigate("/partner-orders", { state: partner });
                        }}
                      />
                      <ThemeBtn
                        BtnClass="Theme_btn_primary partner-page-button edit"
                        BtnText="Rediger"
                        onClick={() => {
                          navigate("/edit-partner", { state: partner });
                        }}
                      />
                      {/* <div className="icon_otr">
                        <i class="ri-eye-fill view_icon icon"></i>
                      </div>
                      <div className="icon_otr">
                        <i class="ri-edit-fill edit_icon icon"></i>
                      </div>
                      <div className="icon_otr">
                        <i class="ri-delete-bin-6-fill delete_icon icon"></i>
                      </div> */}
                    </div>
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

export default PartnerPage;
