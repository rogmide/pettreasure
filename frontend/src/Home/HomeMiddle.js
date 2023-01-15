import React from "react";
import "./HomeMiddle.css";
import MiddleIcon from "./MiddleIcon";
import {
  faDog,
  faCat,
  faHippo,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";

const HomeMiddle = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="title">
          <h1>FIND YOUR NEW BEST FRIEND</h1>
          <p>
            Browse pets from our network of over 11,500 shelters and rescues.
          </p>
          <div className="iconHolders">
            <MiddleIcon type={faDog} linkTo="/dog" />
            <MiddleIcon type={faCat} linkTo="/dog" />
            <MiddleIcon type={faHippo} linkTo="/dog" />
            <MiddleIcon type={faCampground} linkTo="/dog" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMiddle;
