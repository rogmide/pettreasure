import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PetTreasureApi from "../API/Api";
import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  //   const [userData, setUserData] = useState("");
  const realTime = new Date(comment.msg_time);

  //   useEffect(
  //     function PreLoadInfo() {
  //       async function getIsFavorite() {
  //         getUserName();
  //       }
  //       getIsFavorite();
  //     },

  //     []
  //   );

  //   async function getUserName() {
  //     try {
  //       let resp = await PetTreasureApi.getUser(comment.user_id);
  //       setUserData(resp);
  //     } catch (errors) {
  //       console.log(errors);
  //     }
  //   }
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
