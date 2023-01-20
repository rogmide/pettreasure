import React from "react";
import PetList from "./PetList";
import $ from "jquery";

const Gallery = ({ currType }) => {
  return (
    <>
      <PetList currType={currType} />
    </>
  );
};

export default Gallery;
