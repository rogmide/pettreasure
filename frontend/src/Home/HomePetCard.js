import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";

const HomePetCard = () => {
  const [pet, setPet] = useState();

  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      console.log(pet);
      getRandPet();
    }
    getInitialPet();
  }, []);

  async function getRandPet() {
    try {
      let resp = await PetTreasureApi.getRandomPet();
      setPet(resp);
    } catch (errors) {
      console.log(errors);
    }
  }
  return (
    <>
      <div className="cardMain">
        <div className="backGroundCard"></div>
        <div className="cardHolder">
          <img
            className="imgHolder"
            src={
              pet
                ? pet.primary_photo_cropped.small
                : "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            }
            alt="Img Random Animal"
          />
          <div className="petData" style={{ display: "flex" }}>
            <p style={{ fontWeight: "bolder" }}>{pet ? pet.name : "Sample"}</p>
            <p style={{ fontWeight: "bolder" }}>{pet ? pet.age : "Yong"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePetCard;
