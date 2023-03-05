import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PetList from "./PetList";

const Gallery = ({ currType }) => {
  const { animal, org_id } = useParams();
  const { searchVal } = useParams();
  let animalType = "";
  let location = "";
  if (searchVal) {
    animalType = JSON.parse(searchVal).animals_type;
    location = JSON.parse(searchVal).location;
  } else {
    animalType = currType ? currType : animal;
  }

  return (
    <>
      <PetList currType={animalType} org_id={org_id} location={location} />
    </>
  );
};

export default Gallery;
