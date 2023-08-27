import React, { useEffect } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/url";
import { useIsFocused } from "@react-navigation/native";
import MainContainer from "../../containers/MainContainer";
import AppsHeader from "../../components/organisms/headers/AppsHeader";
import AppsListContent from "../../components/organisms/contents/AppsListContent";
import LoadingScreen from "../../components/templates/LoadingScreen";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/navStore";
import ProfileIoAppsPageDesc from "../../components/molecules/ProfileIoAppsPageDesc";

const SubSkill = ({ route }) => {
  const { dataId } = route.params;

  const nav = useRecoilValue(navState);

  const { fetchData, data } = useFetchData();

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData(API_ACCESS.getSubSpeciality + `/${dataId}`, "GET", true);
  }, [isFocused]);

  return (
    <MainContainer>
      <AppsHeader
        title={"Details"}
        withSubmit
        submitButton={require("../../assets/images/plus.png")}
        onSubmit={() =>
          nav.navigate("AddSubSkill", {
            dataId,
          })
        }
        dest={"Home"}
      />
      {data === null ? (
        <LoadingScreen />
      ) : (
        <>
          <ProfileIoAppsPageDesc
            label={
              data.length === 0 ? "No Sub Skill" : data[0].speciality.label
            }
            subLabel={`Total Sub Skill: ${data.length}`}
          />
          <AppsListContent
            dataList={data}
            label={"Sub Skill"}
            dest={"SubSkillQuiz"}
          />
        </>
      )}
    </MainContainer>
  );
};

export default SubSkill;
