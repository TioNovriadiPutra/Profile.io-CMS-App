import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "./src/navigation/AppNav";
import { useFonts } from "expo-font";
import LoadingScreen from "./src/components/templates/LoadingScreen";
import { AuthProvider } from "./src/utils/context/AuthContext";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <RecoilRoot>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </RecoilRoot>
  );
};

export default App;
