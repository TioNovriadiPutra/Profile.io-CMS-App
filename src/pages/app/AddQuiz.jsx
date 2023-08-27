import React, { useEffect, useState } from "react";
import SecondContainer from "../../containers/SecondContainer";
import AppsHeader from "../../components/organisms/headers/AppsHeader";
import { useForm } from "react-hook-form";
import QuizListContent from "../../components/organisms/contents/QuizListContent";
import { useFetchData } from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/url";
import LoadingScreen from "../../components/templates/LoadingScreen";

const AddQuiz = ({ route }) => {
  const { dataId } = route.params;

  const { control, handleSubmit } = useForm();
  const { fetchData, data } = useFetchData();

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData(API_ACCESS.quizQuestion + `/${dataId}`, "GET", true);
  }, [refresh]);

  return (
    <SecondContainer>
      <AppsHeader
        title={data === null ? "Quiz" : `Quiz ${data[0].level}`}
        withSubmit
        submitButton={require("../../assets/images/checklist.png")}
        onSubmit={handleSubmit((dataHasil) => {
          fetchData(
            API_ACCESS.quizDefault + `/${dataId}`,
            "POST",
            true,
            false,
            dataHasil,
            "SubSkillQuiz",
            { dataId: data[0].sub_speciality_id }
          );

          setRefresh(!refresh);
        })}
        dest={"SubSkillQuiz"}
        params={{ dataId: data === null ? null : data[0].sub_speciality_id }}
      />
      {data === null ? (
        <LoadingScreen />
      ) : (
        <QuizListContent
          name={"quizQuestions"}
          defaultValue={data[0].quizQuestions}
          controlFirstPage={control}
        />
      )}
    </SecondContainer>
  );
};

export default AddQuiz;
