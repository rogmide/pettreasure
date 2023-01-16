import React from "react";
import "./MiddleIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, NavLink } from "react-router-dom";

const MiddleIcon = ({ type, linkTo, animal }) => {
  return (
    <>
      {" "}
      <Link className="linkHolder" to={linkTo}>
        <div className="iconHolder">
          <div>
            {/* <FontAwesomeIcon icon="fa-regular fa-dog" /> */}
            <FontAwesomeIcon
              className="searchIcon"
              style={{ color: "#f36250" }}
              icon={type}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <p>{animal}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MiddleIcon;
