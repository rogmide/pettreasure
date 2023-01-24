import React from "react";
import "./OrganizationCard.css";

const OrganizationCard = ({ org }) => {
  console.log(org);
  return (
    <>
      {org ? (
        <div style={{ display: "flex" }}>
          <div className="card mb-3 orgHolder">
            <img
              className="card-img-top"
              src={
                org.photos.length !== 0
                  ? org.photos[0].full
                  : "https://images.unsplash.com/photo-1597160449583-5c76ed653055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80"
              }
              alt="Card image cap"
            />
            <div className="card-body textHolder">
              <h5
                className="card-title"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                {org.name} •{" "}
                {org ? org.address.city + ", " + org.address.state : ""}
              </h5>
              <p className="card-text">Location Address</p>
              <p className="card-text">
                {org.address.address1 ? org.address.address1 : ""}{" "}
                {org
                  ? org.address.city +
                    ", " +
                    org.address.state +
                    ", " +
                    org.address.postcode
                  : ""}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  Phone:
                  {org.phone ? org.phone : ""}{" "}
                </small>
              </p>
            </div>
            <div className="mapAddress"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OrganizationCard;
