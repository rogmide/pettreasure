import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PetPicCarousel from "./PetPicCarousel";
import PetTreasureApi from "../API/Api";
import "./PetDetails.css";

const PetDetails = () => {
  const [pet, setPet] = useState();
  const [org, setOrganization] = useState();
  const { pet_id } = useParams();

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        getPetAndOrganization();
      }
      getInitialPet();
    },

    []
  );

  async function getPetAndOrganization() {
    try {
      let respPet = await PetTreasureApi.getPetById(pet_id);
      console.log(respPet);
      let respOrg = await PetTreasureApi.getOrganizationById(
        respPet.organization_id
      );
      console.log(respOrg);
      setPet(respPet);
      setOrganization(respOrg);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="petDetail">
        <PetPicCarousel pet={pet} />
        {pet ? (
          <div className="petDetailText">
            <h3 className="petName1">{pet.name}</h3>
            <p className="petText1">
              {pet.breeds.primary} •{" "}
              {org ? org.address.city + ", " + org.address.state : ""}
            </p>
            <div className="somePetDetail">
              <p className="petText2">
                {pet.age} • {pet.gender} • {pet.size}
                {pet.colors.primary
                  ? " • " + pet.colors.primary + pet.colors.secondary
                  : ""}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PetDetails;
