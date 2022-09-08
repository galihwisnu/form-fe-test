import React from "react";
import FormInput from "../components/FormInput";

function Address({ formData, setFormData }) {
  return (
    <>
      <FormInput
        type="text"
        label="Street"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
      />
      <FormInput
        type="text"
        label="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
    </>
  );
}

export default Address;
