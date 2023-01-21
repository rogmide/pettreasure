import React from "react";
import "./MiddleIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MiddleIcon = ({ type, linkTo, animal }) => {
  return (
    <>
      {" "}
      <Link
        className="linkHolder"
        to={linkTo}
        onClick="$('.modal').modal('hide')"
      >
        <div className="iconHolder">
          <div style={{ display: "flex", justifyContent: "center" }}>
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
            <p style={{ marginTop: "15px" }}>{animal}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MiddleIcon;
