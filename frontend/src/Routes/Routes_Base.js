import React, { useContext } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";
import UserProfile from "../Auth/UserProfile";
import UserContext from "../UseContext";
import AboutUs from "../AboutUs/AboutUs";
import Organizations from "../Organizations/OrganizationsList";
import Gallery from "../Gallery/Gallery";

function Routes_Base({ login, signup }) {
  const { currUser } = useContext(UserContext);

  // Simple Security Check to see if User is Login
  const SecureRoute = (path, component) => {
    if (currUser) {
      return <Route exact path={path} element={component}></Route>;
    } else {
      return (
        <Route path="*" element={<Navigate exact="true" to="/login" />}></Route>
      );
    }
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/login"
          element={<LoginForm login={login} />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={<SignUpForm signup={signup} />}
        ></Route>
        <Route exact path="/aboutus" element={<AboutUs />}></Route>
        <Route exact path="/organizations" element={<Organizations />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>

        {/* Ensuring that the user is login to access this routes */}
        {SecureRoute("/profile", <UserProfile />)}

        <Route path="*" element={<Navigate exact="true" to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routes_Base;
