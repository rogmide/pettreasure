import React, { useState } from "react";
import "./SignUpForm.css";
import { Navigate } from "react-router-dom";

const SignUpForm = ({ signup }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    password1: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.target.setCustomValidity("");
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.password1) {
      setError("Passwords do NOT match");
      return;
    }
    delete formData.password1;
    alert();
    const resp = await signup({ ...formData });
    setError(resp);
  }

  const erroMsg = (e) => {
    if (e.target.id === "email") {
      e.target.setCustomValidity("Enter in the format: name@sample.com");
    }
    if (e.target.id === "password") {
      e.target.setCustomValidity(
        "At least 1 Uppercase, Lowercase, Number, Symbol, Min 8 chars"
      );
    }
  };

  return (
    <>
      <div className="container SignUpForm">
        <h1>Sign Up</h1>
        {error === true ? (
          // If there is no Error is all good and we Redirect to Home
          <Navigate exact="true" to="/" />
        ) : (
          <h5 style={{ color: "red", fontSize: "18px", textAlign: "center" }}>
            {/* Using the error that is coming from the BackEnd */}
            {/* Controlled the Email with a Regex pattern */}
            <span> {error} </span>
          </h5>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              className="form-control"
              required
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="pwdHolder">
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                className="form-control"
                required
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
                onInvalid={erroMsg}
                value={formData.password}
                onChange={handleChange}
              ></input>
              <label htmlFor="password1">Confirm Password: </label>
              <input
                className="form-control"
                required
                id="password1"
                type="password"
                name="password1"
                placeholder=""
                value={formData.password1}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input
              className="form-control"
              required
              id="firstName"
              type="text"
              name="firstName"
              placeholder=""
              value={formData.firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input
              className="form-control"
              required
              id="lastName"
              type="text"
              name="lastName"
              placeholder=""
              value={formData.lastName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              className="form-control"
              required
              id="email"
              type="text"
              name="email"
              placeholder=""
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onInvalid={erroMsg}
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <br></br>
          <button className="btn btn-secondary float-right">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
