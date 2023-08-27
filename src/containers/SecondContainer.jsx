import { View, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../themes/Colors";

const SecondContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SecondContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SecondWhite,
  },
});
