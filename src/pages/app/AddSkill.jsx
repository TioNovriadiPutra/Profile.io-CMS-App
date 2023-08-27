import { View, Text } from "react-native";
import React from "react";
import MainContainer from "../../containers/MainContainer";
import AppsHeader from "../../components/organisms/headers/AppsHeader";
import AppsFormContent from "../../components/organisms/contents/AppsFormContent";
import { useForm } from "react-hook-form";
import { useFetchData } from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/url";

const AddSkill = () => {
  const { control, handleSubmit } = useForm();
  const { fetchData } = useFetchData();

  return (
    <MainContainer>
      <AppsHeader
        title={"Add Skill"}
        withSubmit
        submitButton={require("../../assets/images/checklist.png")}
        onSubmit={handleSubmit((data) => {
          fetchData(
            API_ACCESS.specialityDefault,
            "POST",
            true,
            false,
            data,
            "Home"
          );
        })}
        dest={"Home"}
      />
      <AppsFormContent
        dataInput={[
          {
            type: "text",
            name: "skillName",
            defaultValue: "",
            control,
            placeholder: "Label",
          },
        ]}
        withSubmit={false}
      />
    </MainContainer>
  );
};

export default AddSkill;
