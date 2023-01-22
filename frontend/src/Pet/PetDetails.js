import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetPicCarousel from "./PetPicCarousel";
import PetTreasureApi from "../API/Api";

const PetDetails = () => {
  const [pet, setPet] = useState();
  const { pet_id } = useParams();

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        getPet();
      }
      getInitialPet();
    },

    []
  );

  async function getPet() {
    try {
      let resp = await PetTreasureApi.getPetById(pet_id);
      console.log(resp);
      setPet(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <PetPicCarousel />
    </>
  );
};

export default PetDetails;
