import React from "react";

const HomePetCard = () => {
  return (
    <>
      <div className="cardMain">
        <div className="backGroundCard"></div>
        <div className="cardHolder">
          <img
            className="imgHolder"
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="Img Random Animal"
          />
          <div className="petData" style={{ display: "flex" }}>
            <p style={{ fontWeight: "bolder" }}>Sample Name</p>
            <p>Age: 12</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePetCard;
