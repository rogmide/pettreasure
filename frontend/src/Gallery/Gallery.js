import React from "react";
import { useParams } from "react-router-dom";
import PetList from "./PetList";

const Gallery = ({ currType }) => {
  const { animal, org_id } = useParams();
  const animalType = currType ? currType : animal;

  return (
    <>
      <PetList currType={animalType} org_id={org_id} />
    </>
  );
};

export default Gallery;
