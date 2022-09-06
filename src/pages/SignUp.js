import React from "react";
import FormInput from "../components/FormInput";

function SignUp() {
  return (
    <>
      <FormInput
        label="Email"
        type="email"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInput
        label="Password"
        type="password"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInput
        label="Confirm Password"
        type="password"
        value=""
        onChange={(e) => console.log(e)}
      />
    </>
  );
}

export default SignUp;
