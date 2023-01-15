import React, { useContext } from "react";
import "./Home.css";
import UserContext from "../UseContext";
import HomeHeader from "./HomeHeader";
import HomePetCard from "./HomePetCard";
import HomeMiddle from "./HomeMiddle";
import "../NavBar/NavBar.css";

const Home = () => {
  const { currUser } = useContext(UserContext);
  // {currUser ? <h2>Welcome Back, {currUser.firstName} !</h2> : NeedLogIn()}

  return (
    <>
      {" "}
      <div className="Home container">
        {/* Home Header Component, Title, Message, Explore Buttom and Some data */}
        <HomeHeader />
        {/* Pet Card Component for Home, display basic info for a random pet */}
        <HomePetCard />
      </div>
      <div className="">
        <HomeMiddle />
      </div>
    </>
  );
};

export default Home;
