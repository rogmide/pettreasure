import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CommentCard from "./CommentCard";
import "./CommentList.css";
import { v4 as uuidv4 } from "uuid";

const CommentList = ({ list_msg }) => {
  return (
    <>
      <div className="comment_holder" style={{ marginTop: "20px" }}>
        <h1>Comments</h1>
        <div
          className="somePetDetail2"
          style={{ width: "90%", marginTop: "-20px" }}
        ></div>
        {list_msg
          ? list_msg.map((c) => <CommentCard key={uuidv4()} comment={c} />)
          : ""}
      </div>
    </>
  );
};

export default CommentList;
