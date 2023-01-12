import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import UserContext from "../UseContext";
import "../NavBar/NavBar.css";

const Home = () => {
  const { currUser } = useContext(UserContext);
  // {currUser ? <h2>Welcome Back, {currUser.firstName} !</h2> : NeedLogIn()}

  return (
    <div className="Home container">
      <div className="headerContainer">
        <h1>
          Find <span className="cute-and-smart"> cute and smart</span> pets to
          play with you
        </h1>
        <p>
          Browse pets from our network pets available for adoption. Help new
          friend to find a home.
        </p>
        <div
          style={{ display: "flex", marginTop: "20px", alignItems: "center" }}
        >
          <button className="nav-btn">Explore Now</button>
          <div style={{ marginLeft: "40px" }}>
            <h1
              style={{
                fontSize: "35px",
                color: "#f36250",
                display: "flex",
                flexDirection: "column",
              }}
            >
              250K+{" "}
              <span
                style={{
                  fontSize: "18px",
                  color: "#606060",
                  textAlign: "center",
                }}
              >
                {" "}
                Pets Available
              </span>
            </h1>
          </div>
          <div style={{ marginLeft: "40px" }}>
            <h1
              style={{
                fontSize: "35px",
                color: "#f36250",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              10K+{" "}
              <span
                style={{
                  fontSize: "18px",
                  color: "#606060",
                  textAlign: "center",
                }}
              >
                {" "}
                Shelters and Rescues
              </span>
            </h1>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Home;
