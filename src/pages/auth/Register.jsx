import React from "react";
import MainContainer from "../../containers/MainContainer";
import AppsHeader from "../../components/organisms/headers/AppsHeader";
import AppsFormContent from "../../components/organisms/contents/AppsFormContent";
import { useForm } from "react-hook-form";
import { useFetchData } from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/url";

const Register = () => {
  const { control, handleSubmit } = useForm();
  const { fetchData } = useFetchData();

  return (
    <MainContainer>
      <AppsHeader title={"Register"} dest={"Login"} />
      <AppsFormContent
        dataInput={[
          {
            type: "text",
            name: "email",
            defaultValue: "",
            control: control,
            placeholder: "Email",
          },
          {
            type: "password",
            name: "password",
            defaultValue: "",
            control: control,
            placeholder: "Password",
          },
          {
            type: "password",
            name: "password_confirmation",
            defaultValue: "",
            control: control,
            placeholder: "Confirm Password",
          },
          {
            type: "text",
            name: "firstName",
            defaultValue: "",
            control: control,
            placeholder: "First Name",
          },
          {
            type: "text",
            name: "lastName",
            defaultValue: "",
            control: control,
            placeholder: "Last Name",
          },
          {
            type: "dropdown",
            name: "gender",
            defaultValue: null,
            control: control,
            placeholder: "Gender",
            options: [
              {
                label: "Male",
                value: "male",
              },
              {
                label: "Female",
                value: "female",
              },
            ],
          },
          {
            type: "date",
            name: "dob",
            defaultValue: null,
            control: control,
            placeholder: "Date of Birth",
          },
        ]}
        label={"Confirm"}
        onSubmit={handleSubmit((data) => {
          fetchData(API_ACCESS.register, "POST", false, false, data, "Login");
        })}
      />
    </MainContainer>
  );
};

export default Register;
