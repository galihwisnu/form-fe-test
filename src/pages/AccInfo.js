import React from "react";
import FormInput from "../components/FormInput";

function Address({ formData, setFormData }) {
  return (
    <>
      <FormInput
        type="text"
        label="Email"
        value={formData.emailAcc}
        onChange={(e) => setFormData({ ...formData, emailAcc: e.target.value })}
      />
      <FormInput
        type="text"
        label="Phone number"
        value={formData.accPhone}
        onChange={(e) => setFormData({ ...formData, accPhone: e.target.value })}
      />
    </>
  );
}

export default Address;
