import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PetPicCarousel from "./PetPicCarousel";
import PetTreasureApi from "../API/Api";
import OrganizationCard from "../Organizations/OrganizationCard";
import "./PetDetails.css";
import "../GeneralCSS/Spinner.css";
import Favorite from "../Favorite/Favorite.js";
import UserContext from "../UseContext";

const PetDetails = () => {
  const [pet, setPet] = useState();
  const [org, setOrganization] = useState();
  const { pet_id } = useParams();
  const { currUser } = useContext(UserContext);

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
      let respOrg = await PetTreasureApi.getOrganizationById(
        respPet.organization_id
      );
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
            <div className="nameFavHolder">
              <h3 className="petName1">{pet.name}</h3>

              {/* BROKEN HEAR FOR WHEN THE USER HAS THE PET AS NO FAVORITE PET
                  THE IDEA IS MAKE THE HARD HOLDE WITH MORE EFFECTS WHEN IS FAV */}
              {/* WHEN SEND FOR REMOVE PET FROM DB GIVE ME A ERROR AND DONT UPDATE THE COMPONETN
              NEED TO FIND OUT WHAT IS GOING ON THERE  */}

              {/* NEXXT STEP WORKING ON FAVORITE LIST FOR USER LOGIN */}
              {/* FIX LOGIN AND REGISTRATION */}
              <div style={{ position: "relative" }}>
                {currUser ? <Favorite pet={pet} /> : ""}
              </div>
            </div>
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
                {pet.attributes.shots_current
                  ? "• Vaccinations up to date"
                  : ""}
                {pet.attributes.spayed_neutered ? " • spayed / neutered." : ""}
              </p>

              {pet.environment.children ||
              pet.environment.cats ||
              pet.environment.dogs ? (
                <div>
                  <p>GOOD IN A HOME WITH</p>
                  <p className="chararteristics">
                    {" "}
                    {pet.environment.children ? " • Children " : ""}
                    {pet.environment.cats ? " • Cats " : ""}
                    {pet.environment.dogs ? " • Dogs" : ""}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="loaderDetailPet">
            <div className="loader"></div>
          </div>
        )}
      </div>
      <OrganizationCard org={org} />
    </>
  );
};

export default PetDetails;
