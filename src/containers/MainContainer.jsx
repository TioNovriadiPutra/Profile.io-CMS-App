import { StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "../themes/Colors";

const MainContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
