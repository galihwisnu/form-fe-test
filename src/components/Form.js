import React, { useState } from "react";
import Address from "../pages/Address";
import PersonalInfo from "../pages/PersonalInfo";
import SignUp from "../pages/SignUp";
import Button from "./Button";

function Form() {
  const [page, setPage] = useState(0);
  const formTitle = ["Sign Up", "Personal Info", "Address", "Done"];

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUp />;
    } else if (page === 1) {
      return <PersonalInfo />;
    } else if (page === 2) {
      return <Address />;
    }

    return "Page";
  };
  return (
    <>
      <form className="form-container">
        <h1 className="display-2">{formTitle[page]}</h1>
        <div className="text-start">{pageDisplay()}</div>
        <div className="mt-5">
          {page !== 0 ? (
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
            text="Next"
            color="purple"
            onClick={(e) => {
              e.preventDefault();
              setPage((currPage) => currPage + 1);
            }}
          />
        </div>
      </form>
    </>
  );
}

export default Form;
