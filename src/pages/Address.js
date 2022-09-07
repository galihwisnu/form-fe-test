import React from "react";
import FormInput from "../components/FormInput";

function Address() {
  return (
    <>
      <FormInput
        type="text"
        label="Street"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInput
        type="text"
        label="City"
        value=""
        onChange={(e) => console.log(e)}
      />
    </>
  );
}

export default Address;
