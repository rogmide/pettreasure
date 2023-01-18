import React from "react";
import PetList from "./PetList";

const Gallery = ({ currType }) => {
  return (
    <>
      <PetList currType={currType} />
    </>
  );
};

export default Gallery;
