import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./MessagesList.css";
const MessagesCard = ({ src, name, msg }) => {
  return (
    <>
      <div
        className="messageHolder"
        style={{ display: "flex", width: "80%", marginTop: "50px" }}
      >
        <img className="d-block imgLeft" src={src} alt="First slide" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <FontAwesomeIcon
              style={{
                color: "5c717a",
                fontSize: "40px",
                marginLeft: "60px",
                marginBottom: "20px",
              }}
              icon={faQuoteLeft}
            />
          </div>
          <div
            style={{
              color: "5c717a",
              fontSize: "40px",
              marginLeft: "60px",
              width: "auto",
            }}
          >
            <p style={{ lineHeight: "35px" }}>{msg}</p>
          </div>
          <div
            style={{
              color: "5c717a",
              fontSize: "40px",
              marginLeft: "60px",
              width: "300px",
            }}
          >
            <p
              style={{
                color: "#f86250",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesCard;
