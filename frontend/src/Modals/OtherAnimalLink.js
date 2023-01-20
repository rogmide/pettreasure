import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OtherAnimalLink = ({ animal, type, linkTo }) => {
  return (
    <>
      <Link
        className="linkHolder"
        to={linkTo}
        onClick="$('.modal').modal('hide')"
      >
        <div style={{ padding: "10px" }}>
          <p>
            {" "}
            <FontAwesomeIcon
              className=""
              style={{ color: "#f36250" }}
              icon={type}
            />{" "}
            {animal}
          </p>
        </div>
      </Link>
    </>
  );
};

export default OtherAnimalLink;
