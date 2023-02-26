import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CommentCard from "./CommentCard";
import "./CommentList.css";
import { v4 as uuidv4 } from "uuid";

const CommentList = ({ list_msg }) => {
  console.log(list_msg);
  return (
    <>
      <div className="comment_holder">
        <h1>Comments</h1>
        {list_msg
          ? list_msg.map((c) => <CommentCard key={uuidv4()} comment={c} />)
          : ""}
      </div>
    </>
  );
};

export default CommentList;
