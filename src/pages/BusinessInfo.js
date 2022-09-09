import React from "react";
import FormInput from "../components/FormInput";

function PersonalInfo({ formData, setFormData }) {
  return (
    <>
      <FormInput
        label="Business name"
        type="text"
        value={formData.businessName}
        onChange={(e) =>
          setFormData({ ...formData, businessName: e.target.value })
        }
      />
      <FormInput
        label="Business phone number"
        type="text"
        value={formData.businessPhone}
        onChange={(e) =>
          setFormData({ ...formData, businessPhone: e.target.value })
        }
      />

      <div className="row">
        <FormInput
          label="Country"
          type="text"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        />
        <FormInput
          label="Province/State"
          type="text"
          value={formData.province}
          onChange={(e) =>
            setFormData({ ...formData, province: e.target.value })
          }
        />
        <FormInput
          label="City"
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      <FormInput
        label="Complete Address"
        type="text"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <FormInput
        label="Business number registration"
        type="text"
        value={formData.businessNumb}
        onChange={(e) =>
          setFormData({ ...formData, businessNumb: e.target.value })
        }
      />
    </>
  );
}

export default PersonalInfo;
