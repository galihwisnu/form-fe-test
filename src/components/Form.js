import React, { useState } from "react";
import AccInfo from "../pages/AccInfo";
import BusinessInfo from "../pages/BusinessInfo";
import OwnerInfo from "../pages/OwnerInfo";
import Button from "./Button";
import Review from "../pages/Review";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNum: "",
    idCard: "",
    businessName: "",
    businessPhone: "",
    country: "",
    province: "",
    city: "",
    address: "",
    businessNumb: "",
    emailAcc: "",
    accPhone: "",
  });
  const formTitle = [
    "Owner Information",
    "Business Information",
    "Account Information",
    "Review",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <OwnerInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <BusinessInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <AccInfo formData={formData} setFormData={setFormData} />;
    } else {
      console.log(formData);
      return <Review formData={formData} />;
    }
  };
  return (
    <main
      className="container shadow p-5 mt-5 rounded-3"
      style={{ maxWidth: 500 }}
    >
      <div className="progress-bar shadow bg-secondary rounded-3">
        <div
          className="div"
          style={{
            width:
              page === 0
                ? "1%"
                : page === 1
                ? "33.3%"
                : page === 2
                ? "66.6%"
                : "100%",
            backgroundColor: page === 3 ? "green" : "var(--purple)",
          }}
        ></div>
      </div>
      <form className="form-container">
        <h2
          className={`"display-2" ${
            page === 3 ? "text-success" : "text-purple"
          }`}
        >
          {formTitle[page]}
        </h2>
        <div className="text-start">{pageDisplay()}</div>
        <div className="mt-5">
          {page !== 0 && page !== 3 ? (
            <Button
              text="Prev"
              color="dark me-3"
              onClick={(e) => {
                e.preventDefault();
                setPage((currPage) => currPage - 1);
              }}
            />
          ) : null}
          <Button
            text={page !== 3 ? "Next" : "Finish"}
            color={page !== 3 ? "purple" : "success"}
            onClick={(e) => {
              e.preventDefault();
              if (page === formTitle.length - 1) {
                window.alert("Regsitration has been SUCCESS!");
                window.location.reload();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          />
        </div>
      </form>
    </main>
  );
}

export default Form;
