import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";
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

  async function addFavorite() {
    try {
      let resp = await PetTreasureApi.setIsFavorite(
        currUser ? currUser.username : undefined,
        pet.id
      );
      if (resp) {
        setIsFavorite(!isFavorite);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFavorite() {
    try {
      let resp = await PetTreasureApi.removeFavorite(
        currUser ? currUser.username : undefined,
        pet.id
      );
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="fav_icon">
        {isFavorite ? (
          <button className="is_FAvorite" onClick={() => removeFavorite()}>
            <FontAwesomeIcon
              style={{ fontSize: "25px", color: "#f36250" }}
              icon={faHeart}
            />
          </button>
        ) : (
          <button className="not_favorite" onClick={() => addFavorite()}>
            <FontAwesomeIcon
              style={{ fontSize: "25px", color: "#5c717a" }}
              icon={faHeartBroken}
            />
          </button>
        )}
      </div>
    </>
  );
};

export default Favorite;
