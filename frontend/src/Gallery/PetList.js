import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";
import GalleryPetCard from "./GalleryPetCard";
import { Link } from "react-router-dom";

const PetList = ({ currType }) => {
  const [pets, setPets] = useState();
  const [pageCount, setPageCount] = useState(1);

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
      // HERE HAD TO WORK WITH LOCATION USER LOCATION
      // IF THE USER ENTER E ZIP CODE WE WORK WITH THE ZIP CODE TO SEND THE REQUEST
      // NEED TO STAR WORKING ON THAT ASAP
      let resp = await PetTreasureApi.getPets(limit, type, pageCount, "33511");
      setPageCount(pageCount + 1);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  async function loadMore(limit = 20, type = currType) {
    try {
      // HERE HAD TO WORK WITH LOCATION USER LOCATION
      // IF THE USER ENTER E ZIP CODE WE WORK WITH THE ZIP CODE TO SEND THE REQUEST
      // NEED TO STAR WORKING ON THAT ASAP
      let resp = await PetTreasureApi.getPets(limit, type, pageCount, "33511");
      setPageCount(pageCount + 1);
      console.log(resp);
      //   (snacks) => [...snacks, { ...newItem, id: newItem.name }]
      let temp = pets.push(resp);
      console.log(temp);
      //   setPets((pets) => [...pets, { resp }]);
      //   pets.push(resp);
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
          <button
            className="linkHolder1 btn-gallery"
            style={{
              backGroundColor: "white",
              border: "none",
              color: "#606060",
            }}
            onClick={() => loadMore()}
          >
            {" "}
            See More...{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default PetList;
