import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./MessagesList.css";

const MessagesList = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner carousellHolder">
          <div className="carousel-item active">
            <img
              className="d-block w-25 imgLeft"
              src="https://images.unsplash.com/photo-1507682520764-93440a60e9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
              alt="First slide"
            />
            <FontAwesomeIcon style={{ color: "5c717a" }} icon={faQuoteLeft} />
          </div>
          {/* <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1529933037705-0d537317ae7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506201803590-8586d5a760e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Third slide"
            />
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default MessagesList;
