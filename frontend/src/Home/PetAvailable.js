import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";
import PetAvailableCard from "./PetAvailableCard";

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
      let resp = await PetTreasureApi.getRandomPet(5);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }
  return (
    <>
      <div className="petHolder">
        {pets ? pets.map((p) => <PetAvailableCard key={p.id} pet={p} />) : ""}
      </div>
    </>
  );
};

export default PetAviable;
