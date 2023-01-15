import React from "react";
import "./MiddleIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Link, NavLink } from "react-router-dom";

const MiddleIcon = ({ type, linkTo }) => {
  return (
    <>
      <div className="iconHolder">
        <Link className="" to="/dog">
          <FontAwesomeIcon
            className="searchIcon"
            style={{ color: "red" }}
            icon={type}
          />
          {/* <FontAwesomeIcon icon="fa-regular fa-dog" /> */}
        </Link>
      </div>
    </>
  );
};

export default MiddleIcon;
