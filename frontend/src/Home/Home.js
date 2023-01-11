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
  // {currUser ? <h2>Welcome Back, {currUser.firstName} !</h2> : NeedLogIn()}

  return <div className="Home container"></div>;
};

export default Home;
