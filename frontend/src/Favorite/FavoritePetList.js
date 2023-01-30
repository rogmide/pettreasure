import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UseContext";
import GalleryPetCard from "../Gallery/GalleryPetCard";
import { v4 as uuidv4 } from "uuid";
import PetTreasureApi from "../API/Api";

const FavoritePetList = () => {
  const [pets, setPets] = useState([]);
  const [petsFav, setPetsFav] = useState();
  const { currUser } = useContext(UserContext);
  let tempPets = [];

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
      getPetsFromAPI(resp.pets);
    } catch (errors) {
      console.log(errors);
    }
  }

  async function getPetsFromAPI(local_pets) {
    let a = new Promise((resolve, reject) => {
      local_pets.map(async (p) => {
        console.log(p.pet_id);
        try {
          let pet = await PetTreasureApi.getPetById(p.pet_id);
          resolve(pet);
        } catch (error) {
          reject(error);
        }
      });
    });

    a.then((pet) => tempPets.push(pet)).finally((p) => console.log(tempPets)); 
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
              <>
                {p ? (
                  <div>
                    <GalleryPetCard
                      key={uuidv4()}
                      pet={p}
                      linkTo={`/animal/${p.id}`}
                    />{" "}
                  </div>
                ) : (
                  ""
                )}
              </>
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
