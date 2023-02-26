import React, { useContext } from "react";
import "./GalleryPetCard.css";
import { Link } from "react-router-dom";
import UserContext from "../UseContext";
import Favorite from "../Favorite/Favorite";
import PetTreasureApi from "../API/Api";

const GalleryPetCard = ({ pet, linkTo }) => {
  const { currUser } = useContext(UserContext);

  // On Click to see a Pet Details add that pet to resent pet view.
  async function addRecentPetView() {
    try {
      if (currUser) {
        let resp = await PetTreasureApi.addRecentPetView(
          currUser ? currUser.username : undefined,
          pet.id,
          pet
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <div className="fav_pet" style={{ position: "relative" }}>
          {currUser ? <Favorite pet={pet} /> : ""}
        </div>
        <Link
          className="linkHolder"
          to={linkTo}
          onClick={() => addRecentPetView()}
        >
          <div className="cardMain">
            <div className="backGroundCard2"></div>
            <div className="cardHolder2">
              {pet && pet.primary_photo_cropped ? (
                <img
                  className="imgHolder2"
                  src={
                    pet
                      ? pet.primary_photo_cropped.full
                      : "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  }
                  alt="Img Random Animal"
                />
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
      </div>
    </>
  );
};

export default GalleryPetCard;
