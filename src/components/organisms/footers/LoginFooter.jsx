import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/navStore";

const LoginFooter = () => {
  const nav = useRecoilValue(navState);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Don't have an account?</Text>

      <TouchableOpacity onPress={() => nav.navigate("Register")}>
        <Text style={styles.label}>Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  question: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.Black,
  },
  label: {
    fontFamily: Fonts.Bold,
    fontSize: 16,
    color: Colors.Green,
    marginTop: 4,
    marginBottom: 79,
  },
});
