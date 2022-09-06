import React from "react";
import FormInput from "../components/FormInput";

function PersonalInfo() {
  return (
    <>
      <FormInput
        label="First Name"
        type="text"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInput
        label="Last Name"
        type="text"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInput
        label="Username"
        type="text"
        value=""
        onChange={(e) => console.log(e)}
      />
    </>
  );
}

export default PersonalInfo;
