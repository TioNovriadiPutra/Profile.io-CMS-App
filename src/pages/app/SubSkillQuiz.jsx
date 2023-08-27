import React, { useEffect } from "react";
import MainContainer from "../../containers/MainContainer";
import AppsHeader from "../../components/organisms/headers/AppsHeader";
import { useFetchData } from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/url";
import LoadingScreen from "../../components/templates/LoadingScreen";
import ProfileIoAppsPageDesc from "../../components/molecules/ProfileIoAppsPageDesc";
import AppsListContent from "../../components/organisms/contents/AppsListContent";
import { useIsFocused } from "@react-navigation/native";

const SubSkillQuiz = ({ route }) => {
  const { dataId } = route.params;
  const { fetchData, data } = useFetchData();

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData(API_ACCESS.quizDefault + `/${dataId}`, "GET", true);
  }, [isFocused]);

  return (
    <MainContainer>
      <AppsHeader
        title={"Sub Skill"}
        dest={"SubSkill"}
        params={{ dataId: data === null ? null : data[0].speciality.id }}
      />
      {data === null ? (
        <LoadingScreen />
      ) : (
        <>
          <ProfileIoAppsPageDesc
            label={data[0].label}
            subLabel={data[0].speciality.label}
          />

          <AppsListContent
            dataList={data[0].subSpecialityQuizzes}
            action
            dest={"AddQuiz"}
          />
        </>
      )}
    </MainContainer>
  );
};

export default SubSkillQuiz;
