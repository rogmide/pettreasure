import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Favorite.css";
import UserContext from "../UseContext";
import PetTreasureApi from "../API/Api";

const Favorite = ({ pet }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { currUser } = useContext(UserContext);

  useEffect(
    function PreLoadInfo() {
      async function getIsFavorite() {
        getFavoritePet();
      }
      getIsFavorite();
    },

    []
  );

  async function getFavoritePet() {
    try {
      let resp = await PetTreasureApi.getIsFavorite(
        currUser ? currUser.username : undefined,
        pet.id
      );
      if (resp) {
        setIsFavorite(!isFavorite);
      }
    } catch (errors) {
      console.log(errors);
    }
  }

  async function addOrRemoveFavoritePet(action) {
    try {
      if (action === "add") {
        let resp = await PetTreasureApi.setIsFavorite(
          currUser ? currUser.username : undefined,
          pet.id
        );
        if (resp) {
          setIsFavorite(!isFavorite);
        }
      } else {
        let resp = await PetTreasureApi.removeFavorite(
          currUser ? currUser.username : undefined,
          pet.id
        );
        if (resp) {
          setIsFavorite(!isFavorite);
        }
      }
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="fav_icon">
        {isFavorite ? (
          <Link
            className="is_FAvorite"
            onClick={() => addOrRemoveFavoritePet("remove")}
          >
            <FontAwesomeIcon
              style={{ fontSize: "25px", color: "#f36250" }}
              icon={faHeart}
            />
          </Link>
        ) : (
          <Link
            className="not_favorite"
            onClick={() => addOrRemoveFavoritePet("add")}
          >
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
