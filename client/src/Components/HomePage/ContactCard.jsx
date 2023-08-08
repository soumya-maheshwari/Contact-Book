import React from "react";

const ContactCard = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Contact Information</h5>
            <p className="card-text">Name: </p>
            <p className="card-text">Email: </p>
            <p className="card-text">Phone: </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
