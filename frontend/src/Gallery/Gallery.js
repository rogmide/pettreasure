import React from "react";
import { useParams } from "react-router-dom";
import PetList from "./PetList";
import $ from "jquery";

const Gallery = ({ currType }) => {
  const { animal } = useParams();
  const animalType = currType ? currType : animal;

  return (
    <>
      <PetList currType={animalType} />
    </>
  );
};

export default Gallery;
