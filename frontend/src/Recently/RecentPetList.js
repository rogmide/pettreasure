import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UseContext";
import GalleryPetCard from "../Gallery/GalleryPetCard";
import { v4 as uuidv4 } from "uuid";
import PetTreasureApi from "../API/Api";

const RecentPetList = () => {
  const [pets, setPets] = useState([]);
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
      let resp = await PetTreasureApi.GetAllRecentPetView(
        currUser ? currUser.username : undefined
      );
      let tempPets = [];
      resp.pets.map((p) => tempPets.push(JSON.parse(p.pet_info)));
      setPets(tempPets);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="petAvailable">
        <h3 className="" style={{ marginLeft: "40px" }}>
          Recently pet view
        </h3>
        <div className="petHolder">
          {pets ? (
            pets.map((p) =>
              p ? (
                <GalleryPetCard
                  key={uuidv4()}
                  pet={p}
                  linkTo={`/animal/${p.id}`}
                />
              ) : (
                ""
              )
            )
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

export default RecentPetList;
