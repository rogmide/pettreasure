import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";
import GalleryPetCard from "./GalleryPetCard";
import { Link } from "react-router-dom";

const PetList = ({ currType }) => {
  const [pets, setPets] = useState();

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        getRandPet();
      }
      getInitialPet();
    },
    [currType]
  );

  async function getRandPet(limit = 20, type = currType) {
    try {
      let resp = await PetTreasureApi.getRandomPet(limit, type);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }
  return (
    <>
      <div className="petAvailable">
        <div className="petHolder">
          {pets
            ? pets.map((p) => (
                <GalleryPetCard key={p.id} pet={p} linkTo={`pet/${p.id}`} />
              ))
            : ""}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBlock: "40px",
          }}
        >
          <Link className="linkHolder1" to="gallery">
            {" "}
            See More...{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PetList;