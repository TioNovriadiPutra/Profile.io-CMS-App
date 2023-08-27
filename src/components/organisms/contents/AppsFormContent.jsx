import React from "react";
import ProfileIoForm from "../../molecules/ProfileIoForm";
import FormContainer from "../../../containers/FormContainer";
import ProfileIoSubmitButton from "../../atoms/ProfileIoSubmitButton";

const AppsFormContent = ({ dataInput, withSubmit = true, label, onSubmit }) => {
  return (
    <FormContainer>
      <ProfileIoForm dataInput={dataInput} />

      {withSubmit === true && (
        <ProfileIoSubmitButton label={label} onSubmit={onSubmit} />
      )}
    </FormContainer>
  );
};

export default AppsFormContent;
