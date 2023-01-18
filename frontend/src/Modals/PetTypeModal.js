import React from "react";
import MiddleIcon from "../Home/MiddleIcon";
import {
  faDog,
  faCat,
  faHippo,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";
import "../GeneralCSS/BaseModal.css";

const PetTypeModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className="modal-content modalContainer"
            style={{ width: "fit-content" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Let's get this right...
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <p style={{ textAlign: "center" }}>
                  What kind of pet are you looking for?
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "10px" }}>
                  <MiddleIcon type={faDog} linkTo="/dogs" animal="Dogs" />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <MiddleIcon type={faCat} linkTo="/cats" animal="Cats" />
                </div>
                <MiddleIcon type={faHippo} linkTo="/others" animal="Others" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="nav-btn" data-dismiss="modal">
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetTypeModal;
