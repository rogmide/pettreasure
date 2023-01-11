import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../UseContext";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch } from "@fortawesome/free-solid-svg-icons";

const NoUserLogIn = () => {
  return (
    <ul className="navbar-nav ml-auto iconSearch">
      <li className="nav-item mr-4">
        <div>
          <NavLink className="nav-link mouseOverIcon" to="/login">
            <FontAwesomeIcon style={{ color: "5c717a" }} icon={faSearch} />
          </NavLink>
        </div>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/login">
          <span className="nav-btn">Login</span>
        </NavLink>
      </li>
      {/* <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/signup">
          <span className="nav-btn">Sign Up</span>
        </NavLink>
      </li> */}
    </ul>
  );
};

const isLogIn = (name, logout) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/" onClick={logout}>
          Log out {name}
        </NavLink>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const { currUser, logout } = useContext(UserContext);

  return (
    <nav
      className="container navbar navbar-expand-lg iconSearch"
      role="navigation"
    >
      <Link className="navbar-brand" to="/">
        <div className="titleHolder">
          <FontAwesomeIcon className="titleIcon" icon={faPaw} />
          <span className="titlePage">
            {" "}
            <span style={{ color: "darkred" }}>Pet</span>Treasure{" "}
          </span>
        </div>
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/profile">
            Home
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/" onClick={logout}>
            About us
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/" onClick={logout}>
            Organizations
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/" onClick={logout}>
            Gallery
          </NavLink>
        </li>
      </ul>
      {currUser ? isLogIn(currUser.firstName, logout) : NoUserLogIn()}
    </nav>
  );
};

export default NavBar;
