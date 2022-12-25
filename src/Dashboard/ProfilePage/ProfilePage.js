import React from "react";

import "./ProfilePage.scss";

import ProfileImg from "../../img/profile-img.png";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Select from "../../components/Select/Select";
import { useLocation, useNavigate } from "react-router-dom";

function ProfilePage() {
  const location = useLocation();
  const user = location?.state;

  return (
    <div className="profile_page_main">
      <div className="profile_img_content_main">
        <div className="img_content_otr">
          <div className="img_otr">
            <img className="profile_img" src={ProfileImg} alt="img" />
          </div>
          <div className="content_otr">
            <h3 className="user_name heading-h3">
              {user.firstName} {user.lastName}
            </h3>
            <p className="designation_text heading-s">Owner & Founder</p>
            <div className="location_otr">
              <i class="ri-map-pin-fill location_icon"></i>
              <p className="location_text heading-xs">Oslo, Norway</p>
            </div>
          </div>
        </div>
        <Link to="/profile-edit" className="edit_btn_otr">
          <i class="ri-edit-fill btn_icon"></i>
          <p className="btn_text heading-xsb">Edit Profile</p>
        </Link>
      </div>
      <div className="info_main">
        <p className="info_heading heading-lb">Profile Info</p>
        <form className="form_main">
          <ul className="info-ul">
            <li className="info_li">
              <label className="heading-xsb input_label">Full Name :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="fullname"
                InputName="fullname"
                InputPlaceholder={user.firstName + " " + user.lastName}
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">Phone Number :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="number"
                InputName="number"
                InputPlaceholder={user.phone}
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">E-mail :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="email"
                InputName="email"
                InputPlaceholder={user.email}
              />
            </li>
            <li className="info_li">
              <label className="heading-xsb input_label">Address :</label>
              <Input
                InputClass="Theme_input_white form_input input_disable"
                Inputype="address"
                InputName="address"
                InputPlaceholder={user.address}
              />
            </li>
          </ul>
        </form>
      </div>
      <div className="profile_table_main">
        <div className="heading_filter_otr">
          <p className="heading_activity heading-lb">User setting</p>
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
        <div className="profile_table">
          <table className="data_table">
            <thead className="table_header">
              <tr>
                <th>
                  <p className="heading-xsb header_text">User ID</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Profile</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Date</p>
                </th>

                <th>
                  <p className="heading-xsb header_text">Role</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Status</p>
                </th>
                <th>
                  <p className="heading-xsb header_text">Action</p>
                </th>
              </tr>
            </thead>
            <tbody className="table_body">
              <tr>
                <td>
                  <p className="heading-xs body_text">#VL2110</p>
                </td>
                <td>
                  <div className="prodile_otr">
                    <img className="profile_img" src={ProfileImg} alt="img" />
                    <p className="heading-xs profile_name">Benedicte</p>
                  </div>
                </td>
                <td>
                  <p className="heading-xs body_text">07 Oct, 2021</p>
                </td>

                <td>
                  <div className="role_select_otr">
                    <Select
                      options={[
                        { label: "Admin", value: "admin" },
                        { label: "Partner", value: "partner" },
                      ]}
                    />
                  </div>
                </td>
                <td>
                  <div className="status_text_otr">
                    <p className="heading-xsb status_text paid_text">
                      Inactive
                    </p>
                  </div>
                </td>
                <td>
                  <div className="icon_otr">
                    <i class="ri-edit-fill edit_icon"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="heading-xs body_text">#VL2110</p>
                </td>
                <td>
                  <div className="prodile_otr">
                    <img className="profile_img" src={ProfileImg} alt="img" />
                    <p className="heading-xs profile_name">Jonas</p>
                  </div>
                </td>
                <td>
                  <p className="heading-xs body_text">07 Oct, 2021</p>
                </td>

                <td>
                  <div className="role_select_otr">
                    <Select
                      options={[
                        { label: "Admin", value: "admin" },
                        { label: "Partner", value: "partner" },
                      ]}
                    />
                  </div>
                </td>
                <td>
                  <div className="status_text_otr">
                    <p className="heading-xsb status_text paid_text">Active</p>
                  </div>
                </td>
                <td>
                  <div className="icon_otr">
                    <i class="ri-edit-fill edit_icon"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
