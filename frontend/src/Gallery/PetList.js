import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";
import GalleryPetCard from "./GalleryPetCard";
import { v4 as uuidv4 } from "uuid";
import "../GeneralCSS/Spinner.css";

const PetList = ({ currType, org_id }) => {
  const [pets, setPets] = useState();
  const [pageCount, setPageCount] = useState(1);

  useEffect(
    function PreLoadInfo() {
      async function getInitialPet() {
        if (org_id) {
          getPetsForOrg(100, org_id);
        } else {
          getPets();
        }
      }
      getInitialPet();
    },

    [currType]
  );

  async function getPets(limit = 20, type = currType) {
    try {
      // HERE HAD TO WORK WITH LOCATION USER LOCATION
      // IF THE USER ENTER E ZIP CODE WE WORK WITH THE ZIP CODE TO SEND THE REQUEST
      // NEED TO STAR WORKING ON THAT ASAP

      let resp = await PetTreasureApi.getPets(limit, type, 1, "33511");
      setPageCount(1);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  async function getPetsForOrg(limit = 20, org_id) {
    try {
      // HERE HAD TO WORK WITH LOCATION USER LOCATION
      // IF THE USER ENTER E ZIP CODE WE WORK WITH THE ZIP CODE TO SEND THE REQUEST
      // NEED TO STAR WORKING ON THAT ASAP

      let resp = await PetTreasureApi.getPetsForOrg(limit, org_id);
      setPageCount(1);
      console.log(resp);
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
      let resp = await PetTreasureApi.getPets(
        limit,
        type,
        pageCount + 1,
        "33511"
      );
      setPageCount(pageCount + 1);
      setPets([...pets, ...resp]);
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <>
      <div className="petAvailable">
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
