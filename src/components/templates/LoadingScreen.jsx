import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../../containers/MainContainer";

const LoadingScreen = () => {
  return (
    <MainContainer>
      <ActivityIndicator size={"large"} style={styles.loader} />
    </MainContainer>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
