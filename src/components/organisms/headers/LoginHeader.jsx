import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.desc}>
        Welcome, please insert your email and password
      </Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 127,
    marginBottom: 105,
    marginHorizontal: 38,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 40,
    color: Colors.Black,
  },
  desc: {
    textAlign: "center",
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Grey,
    marginTop: 8,
  },
});
