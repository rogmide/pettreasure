import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UseContext";
import GalleryPetCard from "../Gallery/GalleryPetCard";
import { v4 as uuidv4 } from "uuid";
import PetTreasureApi from "../API/Api";

const FavoritePetList = () => {
  const [pets, setPets] = useState([]);
  let pet = {};
  const { currUser } = useContext(UserContext);

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        getFavPets();
      }
      getInitialPet();
    },

    []
  );

  async function getFavPets() {
    try {
      let resp = await PetTreasureApi.GetAllFavoritePet(
        currUser ? currUser.username : undefined
      );

      // Working on this got limit of request per day
      if (resp.pets.length != 0) {
        let tempPets = [];
        let count = 0;
        resp.pets.forEach(async (pet) => {
          let tempPet = await PetTreasureApi.getPetById(pet.pet_id);
          tempPets.push(tempPet);
          console.log(count + 1);
        });

        console.log(tempPets);
        // setPets(tempPets);
      }
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="petAvailable">
        <h3 className="" style={{ marginLeft: "40px" }}>
          My Favorites
        </h3>
        <div className="petHolder">
          {pets ? (
            pets.map((p) => (
              <GalleryPetCard
                key={uuidv4()}
                pet={p}
                linkTo={`/animal/${p.id}`}
              />
            ))
          ) : (
            <div className="loader"></div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBlock: "40px",
          }}
        ></div>
      </div>
    </>
  );
};

export default FavoritePetList;
