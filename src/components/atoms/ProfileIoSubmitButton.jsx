import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoSubmitButton = ({ label, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSubmit}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ProfileIoSubmitButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Green,
    justifyContent: "center",
    alignItems: "center",
    height: 47,
    borderRadius: 10,
    marginBottom: 38,
  },
  label: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.White,
  },
});
