import React, { useContext, useState } from "react";
import "./JobCard.css";
import UserContext from "../UseContext";
import JoblyApi from "../API/Api";

const JobCard = ({ job }) => {
  const { currUser } = useContext(UserContext);
  const [reRender, setReRender] = useState(false);

  const isApply = () => {
    return currUser.applications.includes(job.id);
  };

  const Apply = () => {
    try {
      JoblyApi.applyForJob(currUser.username, job.id);
      currUser.applications.push(currUser.username, job.id);
      setReRender(!reRender);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="JobCard" style={{ width: "60vw" }}>
        <div>{job.title}</div>
        <div className="card-body">
          <div>
            <p className="card-text"> Salary: {job.salary}</p>
            <p className="card-text"> Equity: {job.equity}</p>
          </div>
          {!isApply() ? (
            <button onClick={Apply} className="btn btn-secondary">
              Apply
            </button>
          ) : (
            <button disabled className="btn btn-secondary">
              Applied
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default JobCard;
