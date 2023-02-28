import React, { useState, useEffect, useContext } from "react";
import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  const realTime = new Date(comment.msg_time);

  return (
    <>
      <div className="comment_card">
        <h2>{comment.msg_title}</h2>
        <p>
          By:{" "}
          <span style={{ color: "blue" }}>
            {comment.first_name} {comment.last_name}{" "}
          </span>{" "}
          On {realTime.toDateString()}
        </p>
        <p>{comment.msg_body}</p>
      </div>
    </>
  );
};

export default CommentCard;
