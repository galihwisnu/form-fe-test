import React from "react";

function Welcome({ formData }) {
  return (
    <>
      <h4 className="text-center mt-2">
        Review your business information input...
      </h4>
      <div className="card mt-4">
        <h6 className="card-header bg-dark text-white">Owner Information</h6>
        <div className="card-body">
          <ul className="list-group list-grup-flush">
            <li className="list-group-item">
              Owner full name:{" "}
              <span className="text-success">{formData.fullName}</span>
            </li>
            <li className="list-group-item">
              Owner email:{" "}
              <span className="text-success">{formData.email}</span>
            </li>
            <li className="list-group-item">
              Owner phone number:{" "}
              <span className="text-success">{formData.phoneNumb}</span>
            </li>
            <li className="list-group-item">
              Owner identity number:{" "}
              <span className="text-success">{formData.idCard}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card mt-4">
        <h6 className="card-header bg-dark text-white">Business Information</h6>
        <div className="card-body">
          <ul className="list-group list-grup-flush">
            <li className="list-group-item">
              Business name:{" "}
              <span className="text-success">{formData.businessName}</span>
            </li>
            <li className="list-group-item">
              Business phone:{" "}
              <span className="text-success">{formData.businessPhone}</span>
            </li>
            <li className="list-group-item">
              Country and City:{" "}
              <span className="text-success">
                {formData.country} {formData.city}
              </span>
            </li>
            <li className="list-group-item">
              Business address:{" "}
              <span className="text-success">{formData.address}</span>
            </li>
            <li className="list-group-item">
              Business number registration:{" "}
              <span className="text-success">{formData.businessNumb}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card mt-4">
        <h6 className="card-header bg-dark text-white">Account Information</h6>
        <div className="card-body">
          <ul className="list-group list-grup-flush">
            <li className="list-group-item">
              Email: <span className="text-success">{formData.emailAcc}</span>
            </li>
            <li className="list-group-item">
              Phone number:{" "}
              <span className="text-success">{formData.accPhone}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Welcome;
