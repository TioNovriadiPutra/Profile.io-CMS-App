import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { tokenState } from "../store/authStore";
import AuthStack from "../routers/auth/AuthStack";
import AppStack from "../routers/app/AppStack";
import { loadingScreenState } from "../store/loadingStore";
import LoadingScreen from "../components/templates/LoadingScreen";

const AppNav = () => {
  const token = useRecoilValue(tokenState);
  const loadingScreen = useRecoilValue(loadingScreenState);

  if (loadingScreen === true) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppNav;
