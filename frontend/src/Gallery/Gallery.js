import React from "react";
import PetList from "./PetList";
import $ from "jquery";

const Gallery = ({ currType }) => {
  // $(".modal").modal("hide");

  // if ($(".modal")) {

  //   $(".modal").modal("hide");
  // }

  // closeModal($(".modal"));
  // document.addEventListener("DOMContentLoaded", function (event) {
  //   //do work
  //   $(".modal").modal("hide");
  // });

  return (
    <>
      <PetList currType={currType} />
    </>
  );
};

export default Gallery;
