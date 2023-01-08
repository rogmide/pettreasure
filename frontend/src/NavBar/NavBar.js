import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../UseContext";

const NoUserLogIn = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </li>
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
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Unnamed-CapStone
      </Link>
      {currUser ? isLogIn(currUser.firstName, logout) : NoUserLogIn()}
    </nav>
  );
};

export default NavBar;
