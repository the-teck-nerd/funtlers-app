import React from "react";
import { Link } from "react-router-dom";
import "./InnerHeader.scss";

function InnerHeader(props) {
  return (
    <div className="inner_header_main">
      <div className="container">
        <div className="header_wrapper">
          <h2 className="heading-h2 header_heading">{props.HeaderHeading}</h2>
         
         {/* Todo: removing inner headr for now
          {props.hideHome !== true && (
            <p className="heading-m header_desc_link">
              <span>{props.PageText}</span>
              |
              <Link to="/" className="linkk_home">
                {" "}
                Home
              </Link>
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default InnerHeader;
