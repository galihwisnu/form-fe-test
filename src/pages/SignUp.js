import React from "react";
import FormInput from "../components/FormInput";

function SignUp({ formData, setFormData }) {
  return (
    <>
      <FormInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInput
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <FormInput
        label="Confirm Password"
        type="password"
        value={setFormData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />
    </>
  );
}

export default SignUp;
