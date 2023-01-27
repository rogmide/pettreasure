import React from "react";
import { useParams } from "react-router-dom";
import PetList from "./PetList";
import $ from "jquery";

const Gallery = ({ currType }) => {
  const { animal, org_id } = useParams();
  const animalType = currType ? currType : animal;

  return (
    <>
      {/* GOT TO FIX GALLERY IS THERE IS A ORGANIZATION ID WE NEED TO REMOVE 
    THE LOAD MORE BUTTON ON THE BOTTOM AND WE SET A MESSAGES THAT THE ORGANIZATION SOMETIMES
    DONT HAVE ANY PETS */}
      <PetList currType={animalType} org_id={org_id} />
    </>
  );
};

export default Gallery;
