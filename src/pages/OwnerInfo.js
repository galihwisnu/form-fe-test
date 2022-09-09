import React from "react";
import FormInput from "../components/FormInput";

function OwnerInfo({ formData, setFormData }) {
  return (
    <>
      <FormInput
        label="Owner full name"
        type="text"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <FormInput
        label="Owner email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInput
        label="Owner phone number"
        type="text"
        value={setFormData.phoneNum}
        onChange={(e) => setFormData({ ...formData, PhoneNum: e.target.value })}
      />
      <FormInput
        label="Owner identity number"
        type="text"
        value={setFormData.idCard}
        onChange={(e) => setFormData({ ...formData, idCard: e.target.value })}
      />
    </>
  );
}

export default OwnerInfo;
