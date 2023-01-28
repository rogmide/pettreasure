import React, { useState, useEffect, useContext } from "react";
import "./GalleryPetCard.css";
import { Link } from "react-router-dom";
import PetTreasureApi from "../API/Api";
import UserContext from "../UseContext";
import Favorite from "../Favorite/Favorite";

const GalleryPetCard = ({ pet, linkTo }) => {
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

  return (
    <>
      <Link className="linkHolder" to={linkTo}>
        <div className="cardMain">
          <div className="backGroundCard2"></div>
          <div className="cardHolder2">
            {pet && pet.primary_photo_cropped ? (
              <div style={{ position: "relative" }}>
                <Favorite fav={isFavorite} />
                <img
                  className="imgHolder2"
                  src={
                    pet
                      ? pet.primary_photo_cropped.full
                      : "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  }
                  alt="Img Random Animal"
                />
              </div>
            ) : (
              <img
                className="imgHolder2"
                src={
                  "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                }
                alt="Img Random Animal"
              />
            )}

            <div
              className="petData"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <p className="petName" style={{ fontWeight: "bolder" }}>
                {pet ? pet.name.slice(0, 10) : "Loading..."}
              </p>
              <div>
                <div className="petData2" style={{ maxWidth: "200px" }}>
                  {pet ? pet.age : "Loading..."} •{" "}
                  {pet ? pet.breeds.primary : "Loading..."}
                  <p>
                    {pet.distance ? `${Math.floor(pet.distance)} miles` : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GalleryPetCard;
