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
            <div>
              <h3 className="petName1">About</h3>
              {pet.tags.length !== 0 ? (
                <div>
                  <p>CHARACTERISTICS</p>
                  <p className="chararteristics">
                    • {pet.tags ? pet.tags.map((tag) => tag + " • ") : ""}
                  </p>
                </div>
              ) : (
                ""
              )}
              {pet.coat ? (
                <div>
                  <p>COAT LENGTH</p>
                  <p className="chararteristics">• {pet.coat}</p>
                </div>
              ) : (
                ""
              )}

              <p>HOUSE-TRAINED</p>
              <p className="chararteristics">
                {" "}
                • {pet.attributes.house_trained ? "Yes" : "No"}
              </p>

              <p>HEALTH</p>
              <p className="chararteristics">
                {" "}
                {" "}
                {pet.attributes.shots_current
                  ? "• Vaccinations up to date"
                  : ""}
                {pet.attributes.spayed_neutered ? " • spayed / neutered." : ""}
              </p>
              <p>GOOD IN A HOME WITH</p>
              <p className="chararteristics">
                {" "}
                {pet.environment.children ? " • Children " : ""}
                {pet.environment.cats ? " • Cats " : ""}
                {pet.environment.dogs ? " • Dogs" : ""}
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
