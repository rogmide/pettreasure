import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Favorite.css";

const Favorite = ({ fav }) => {
  return (
    <>
      <div
        className="fav_icon"
        // style={{ position: "absolute", right: "20px", top: "20px" }}
      >
        {fav ? (
          <Link className="is_FAvorite" to="">
            <FontAwesomeIcon
              style={{ fontSize: "40px", color: "#f36250" }}
              icon={faHeart}
            />
          </Link>
        ) : (
          <Link className="not_favorite" to="">
            <FontAwesomeIcon
              style={{ fontSize: "25px", color: "#5c717a" }}
              icon={faHeartBroken}
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default Favorite;
