import React, { useState, useEffect } from "react";
import PetTreasureApi from "../API/Api";
import PetAvailableCard from "./PetAvailableCard";
import "./PetAviable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const PetAviable = () => {
  const [pets, setPets] = useState();

  useEffect(function PreLoadInfo() {
    async function getInitialPet() {
      getRandPet();
    }
    getInitialPet();
  }, []);

  async function getRandPet() {
    try {
      let resp = await PetTreasureApi.getRandomPet(4, "NoType");
      setPets(resp);
    } catch (errors) {
      console.log(errors);
    }
  }
  return (
    <>
      <div className="petAvailable">
        <div className="titlePetAdoption">
          <h3
            style={{
              fontSize: "xx-large",
              textAlign: "center",
              color: "white",
            }}
          >
            • Pet Available for Adoption •
          </h3>
        </div>
        <div className="petHolder">
          {pets ? pets.map((p) => <PetAvailableCard key={p.id} pet={p} />) : ""}
          <div className="cardMain1">
            <div className="backGroundCard1"></div>
            <div className="cardHolder1">
              <div className="findMore">
                <FontAwesomeIcon
                  className="titleIcon iconHolder1"
                  icon={faPaw}
                />
                <div
                  className="petData1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <p style={{ fontSize: "16.9px", textAlign: "center", marginBottom: "30px" }}>
                    6000+ pets available on{" "}
                    <span style={{ color: "darkred" }}>Pet</span>Treasure{" "}
                  </p>
                </div>

                <span className="titlePage">
                  {" "}
                  <p style={{ fontSize: "16.9px", textAlign: "center", marginTop: "10px" }}>
                    {" "}
                    MEET THEM{" "}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetAviable;
