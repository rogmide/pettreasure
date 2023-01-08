import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import UserContext from "../UseContext";

// Need to add documenttion to all the project

const NeedLogIn = () => {
  return (
    <div>
      <Link className="btn btn-secondary mr-2" to="/login">
        Log in
      </Link>
      <Link className="btn btn-secondary" to="/signup">
        Sign up
      </Link>
    </div>
  );
};

const Home = () => {
  const { currUser } = useContext(UserContext);

  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="mb-3 font-weight-bold" style={{ color: "#343a40" }}>
          Unnamed-CapStone
        </h1>
        <p>All the jobs in one, convenient place.</p>
        {/* Checking if the user is login */}
        {currUser ? <h2>Welcome Back, {currUser.firstName} !</h2> : NeedLogIn()}
      </div>
    </div>
  );
};

export default Home;
