import React from "react";
import PersonalInfo from "../pages/PersonalInfo";
import SignUp from "../pages/SignUp";

function Form() {
  return (
    <>
      <form className="form-container">
        <SignUp />
        <PersonalInfo />
      </form>
    </>
  );
}

export default Form;
