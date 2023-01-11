import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../UseContext";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faSearch,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const SearchHeartIcons = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink className="nav-link   mouseOverIcon" to="/">
        <FontAwesomeIcon style={{ color: "5c717a" }} icon={faSearch} />
      </NavLink>
      <NavLink className="nav-link  mouseOverIcon" to="/login">
        <FontAwesomeIcon style={{ color: "5c717a" }} icon={faHeart} />
      </NavLink>
    </div>
  );
};

const NoUserLogIn = () => {
  return (
    <ul className="navbar-nav ml-auto iconSearch">
      <div className="bigScreen">{SearchHeartIcons()}</div>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/login">
          <span className="nav-btn">Login</span>
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/signup">
          <span className="nav-btn">Sign Up</span>
        </NavLink>
      </li>
    </ul>
  );
};

const isLogIn = (name, logout) => {
  return (
    <ul className="navbar-nav ml-auto iconSearch">
      <li className="nav-item mr-4 bigScreen">{SearchHeartIcons()}</li>
      <div className="dropdown">
        <button
          className="dropdown-toggle nav-btn"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {name}
        </button>
        <div
          className="dropdown-menu dropMenu "
          aria-labelledby="dropdownMenuButton"
        >
          <div className="dropMenuItemHolder">
            <NavLink
              className="nav-link active dropMenuItem"
              to="/profile"
              // onClick={logout}
            >
              Account Info
            </NavLink>
            <NavLink
              className="nav-link active dropMenuItem"
              to="/"
              onClick={logout}
            >
              My Recent Search
            </NavLink>
            <NavLink
              className="nav-link active dropMenuItem"
              to="/"
              onClick={logout}
            >
              Sign out
            </NavLink>
          </div>
        </div>
      </div>
    </ul>
  );
};

const middleMenu = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/profile">
          Home
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/">
          About us
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/">
          Organizations
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/">
          Gallery
        </NavLink>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const { currUser, logout } = useContext(UserContext);

  return (
    <nav className="container navbar navbar-expand-lg " role="navigation">
      <Link className="navbar-brand" to="/">
        <div className="titleHolder">
          <FontAwesomeIcon className="titleIcon" icon={faPaw} />
          <span className="titlePage">
            {" "}
            <span style={{ color: "darkred" }}>Pet</span>Treasure{" "}
          </span>
        </div>
      </Link>

      <div className="smallScreen" style={{ display: "flex" }}>
        {SearchHeartIcons()}
      </div>
      {/* <div className="smallScreen" style={{ display: "flex" }}>
        <NavLink className="nav-link   mouseOverIcon" to="/">
          <FontAwesomeIcon style={{ color: "5c717a" }} icon={faSearch} />
        </NavLink>
        <NavLink className="nav-link  mouseOverIcon" to="/login">
          <FontAwesomeIcon style={{ color: "5c717a" }} icon={faHeart} />
        </NavLink>
      </div> */}

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <FontAwesomeIcon style={{ color: "5c717a" }} icon={faBars} />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        {middleMenu()}
        {currUser ? isLogIn(currUser.firstName, logout) : NoUserLogIn()}
      </div>
    </nav>
  );
};

export default NavBar;
