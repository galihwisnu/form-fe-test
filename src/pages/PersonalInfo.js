import React from "react";
import FormInput from "../components/FormInput";

function PersonalInfo({ formData, setFormData }) {
  return (
    <>
      <FormInput
        label="First Name"
        type="text"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <FormInput
        label="Last Name"
        type="text"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <FormInput
        label="Username"
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
    </>
  );
}

export default PersonalInfo;
