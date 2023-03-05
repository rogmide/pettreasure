import React, { useState, useEffect, useContext } from "react";
import PetTreasureApi from "../API/Api";
import GalleryPetCard from "./GalleryPetCard";
import { v4 as uuidv4 } from "uuid";
import "../GeneralCSS/Spinner.css";
import UserContext from "../UseContext";

const PetList = ({ currType, org_id, location }) => {
  const [pets, setPets] = useState();
  const [pageCount, setPageCount] = useState(1);
  const { zip_code } = useContext(UserContext);

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
      let resp = await PetTreasureApi.getPets(
        limit,
        type,
        1,
        location ? location : zip_code
      );
      setPageCount(1);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  async function getPetsForOrg(limit = 20, org_id) {
    try {
      let resp = await PetTreasureApi.getPetsForOrg(limit, org_id);
      setPageCount(1);
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }

  async function loadMore(limit = 20, type = currType) {
    try {
      let resp = await PetTreasureApi.getPets(
        limit,
        type,
        pageCount + 1,
        location ? location : zip_code
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
