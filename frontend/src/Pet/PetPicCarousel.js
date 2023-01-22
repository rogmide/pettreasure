import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./PetPicCarousel.css";
import MessagesCard from "../Home/MessagesCard";

const PetPicCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner carousellHolder">
          <div style={{ marginLeft: "16%" }}>
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
            <div className="carousel-item active">
              <MessagesCard
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                name="Pedro Cannizares"
                msg="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
              />
            </div>
            <div className="carousel-item">
              <MessagesCard
                src="https://images.unsplash.com/photo-1506201803590-8586d5a760e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                name="Roger Delgado"
                msg="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
              />
            </div>
            <div className="carousel-item">
              <MessagesCard
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                name="Carlos Menendes"
                msg="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
              />
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="arrowIcon1">
            <FontAwesomeIcon
              className="arrowIcon1"
              style={{
                fontSize: "40px",
              }}
              icon={faArrowLeft}
            />
          </span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="arrowIcon1">
            <FontAwesomeIcon
              style={{
                fontSize: "40px",
              }}
              icon={faArrowRight}
            />
          </span>
        </a>
      </div>
    </>
  );
};

export default PetPicCarousel;
