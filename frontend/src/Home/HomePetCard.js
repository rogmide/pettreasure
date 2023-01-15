import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";

const HomePetCard = () => {
  const [pet, setPet] = useState([]);

  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      getRandPet();
    }
    getInitialPet();
  }, []);

  async function getRandPet() {
    try {
      let pet = await PetTreasureApi.getRandomPet();
      console.log(pet);
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
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="Img Random Animal"
          />
          <div className="petData" style={{ display: "flex" }}>
            <p style={{ fontWeight: "bolder" }}>Sample Name</p>
            <p>Age: 12</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePetCard;
