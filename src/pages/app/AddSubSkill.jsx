import React from "react";
import MainContainer from "../../containers/MainContainer";
import AppsHeader from "../../components/organisms/headers/AppsHeader";
import AppsFormContent from "../../components/organisms/contents/AppsFormContent";
import { useForm } from "react-hook-form";
import { useFetchData } from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/url";

const AddSubSkill = ({ route }) => {
  const { dataId } = route.params;

  const { control, handleSubmit } = useForm();
  const { fetchData } = useFetchData();

  const addSubSkill = (data) => {
    let body = new FormData();
    if (data.logo !== null) {
      body.append("logo", data.logo);
    }
    body.append("subSkillName", data.subSkillName);
    body.append("color", data.color);

    fetchData(
      API_ACCESS.subSpecialityDefault + `/${dataId}`,
      "POST",
      true,
      true,
      body,
      "SubSkill",
      { dataId }
    );
  };

  return (
    <MainContainer>
      <AppsHeader
        title={"Add Sub Skill"}
        withSubmit
        submitButton={require("../../assets/images/checklist.png")}
        dest={"SubSkill"}
        params={{ dataId }}
        onSubmit={handleSubmit(addSubSkill)}
      />
      <AppsFormContent
        withSubmit={false}
        dataInput={[
          {
            type: "image",
            name: "logo",
            defaultValue: null,
            control,
            placeholder: require("../../assets/images/camera.png"),
          },
          {
            type: "text",
            name: "subSkillName",
            defaultValue: null,
            control,
            placeholder: "Label",
          },
          {
            type: "color",
            name: "color",
            defaultValue: null,
            control,
            placeholder: "Color",
          },
        ]}
      />
    </MainContainer>
  );
};

export default AddSubSkill;
