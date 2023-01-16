import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";
import PetAvailableCard from "./PetAvailableCard";
import "./PetAviable.css";

const PetAviable = () => {
  const [pets, setPets] = useState();

  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      getRandPet();
    }
    getInitialPet();
  }, []);

  async function getRandPet() {
    try {
      let resp = await PetTreasureApi.getRandomPet(4, "NoType");
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }
  return (
    <>
      <div className="petAvailable">
        <div className="titlePetAdoption">
          <h3
            style={{
              fontSize: "xx-large",
              textAlign: "center",
              color: "white",
            }}
          >
            • Pet Available for Adoption •
          </h3>
        </div>
        <div className="petHolder">
          {pets ? pets.map((p) => <PetAvailableCard key={p.id} pet={p} />) : ""}
        </div>
      </div>
    </>
  );
};

export default PetAviable;
