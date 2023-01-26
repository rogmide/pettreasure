import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./PetPicCarousel.css";
import { v4 as uuidv4 } from "uuid";

const PetPicCarousel = ({ pet }) => {
  return (
    <>
      {pet && pet.primary_photo_cropped ? (
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div>
              {/* FOR THE CAROUSEL TO WORK HAS TO STAR ON A ACTIVE FIRST AND THEN RUN THE COROUSEL ITEMS
            
            SOOOOOO

            <div class="carousel-item active">
              <MessagesCard src={msg[0].img} name={msg[0].name msg={msg[0].msg}/>
            </div>

            THEN
            
            msg.map( m => {
                <>
                    <div class="carousel-item">
                        <MessagesCard src={m.img} name={m.name} msg={m.msg}/>
                    </div>
                </>
            } )

            <div class="carousel-item">
            </div>

            
            */}

              <div key={uuidv4()} className="carousel-item active">
                <img src={pet.photos.pop().full} alt="first pic" />
              </div>

              {pet.photos.map((pic) => (
                <div key={uuidv4()} className="carousel-item">
                  <img src={pic.full} alt="first pic" />
                </div>
              ))}
            </div>
          </div>
          <a
            className="carousel-control-prev next-back"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
            // style={{ height: "fit-content" }}
          >
            <span className="arrowIcon1">
              <FontAwesomeIcon
                className="arrowIcon1"
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
                icon={faArrowLeft}
              />
            </span>
          </a>
          <a
            className="carousel-control-next next-back"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            // style={{ height: "fit-content" }}
          >
            <span className="arrowIcon1">
              <FontAwesomeIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
                icon={faArrowRight}
              />
            </span>
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PetPicCarousel;
