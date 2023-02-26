import React, { useState } from "react";
import "./CommentForm.css";
import { Navigate } from "react-router-dom";
import PetTreasureApi from "../API/Api";

const CommentForm = ({ pet_id, pet, user, addCommentForPet }) => {
  const INITIAL_STATE = {
    msg_title: "",
    msg_body: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      pet_id: pet_id,
      user_id: user.username,
      pet_info: pet,
      msg_title: formData.msg_title,
      msg_body: formData.msg_body,
    };

    addCommentForPet(data);
    setFormData(INITIAL_STATE);
  }

  return (
    <>
      <div className="container msgHolder">
        <h1>Add Comments</h1>
        {error === true ? (
          <Navigate exact="true" to="/" />
        ) : (
          <h5 style={{ color: "red", fontSize: "18px", textAlign: "center" }}>
            {error}
          </h5>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="msg_title">Title: </label>
            <input
              className="form-control input_msg_title"
              required
              id="msg_title"
              type="text"
              name="msg_title"
              placeholder="Title"
              value={formData.msg_title}
              onChange={handleChange}
            ></input>
          </div>
          <label htmlFor="msg_body">Comment: </label>
          <textarea
            className="form-control"
            required
            id="msg_body"
            type="msg_body"
            name="msg_body"
            placeholder="Comments Here"
            value={formData.msg_body}
            onChange={handleChange}
          ></textarea>
          <br></br>
          <div>
            <button className="btn nav-btn btnLogin float-right">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
