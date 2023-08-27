import React, { useEffect } from "react";
import MainContainer from "../../containers/MainContainer";
import AppsHeader from "../../components/organisms/headers/AppsHeader";
import { useRecoilState } from "recoil";
import { navState } from "../../store/navStore";
import { useFetchData } from "../../hooks/useFetchData";
import { API_ACCESS } from "../../utils/config/url";
import LoadingScreen from "../../components/templates/LoadingScreen";
import AppsListContent from "../../components/organisms/contents/AppsListContent";
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const [nav, setNav] = useRecoilState(navState);
  const { fetchData, data } = useFetchData();

  const isFocused = useIsFocused();

  useEffect(() => {
    setNav(navigation);
  }, []);

  useEffect(() => {
    fetchData(API_ACCESS.specialityDefault, "GET", false);
  }, [isFocused]);

  return (
    <MainContainer>
      <AppsHeader
        title={"Skill"}
        hamburger={true}
        withSubmit
        submitButton={require("../../assets/images/plus.png")}
        onSubmit={() => nav.navigate("AddSkill")}
      />
      {data === null ? (
        <LoadingScreen />
      ) : (
        <AppsListContent dataList={data} label={"Label"} dest={"SubSkill"} />
      )}
    </MainContainer>
  );
};

export default Home;
