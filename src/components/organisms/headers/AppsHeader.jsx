import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfileIoBackButton from "../../atoms/ProfileIoBackButton";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import ProfileIoImageSubmitButton from "../../atoms/ProfileIoImageSubmitButton";
import ProfileIoHamburger from "../../atoms/ProfileIoHamburger";

const AppsHeader = ({
  title,
  hamburger = false,
  withSubmit = false,
  submitButton,
  onSubmit,
  dest,
  params = null,
}) => {
  return (
    <View style={styles.container}>
      {hamburger === true ? (
        <ProfileIoHamburger />
      ) : (
        <ProfileIoBackButton dest={dest} params={params} />
      )}

      <Text style={styles.title}>{title}</Text>

      {withSubmit === false ? (
        <View style={styles.decoy} />
      ) : (
        <ProfileIoImageSubmitButton source={submitButton} onSubmit={onSubmit} />
      )}
    </View>
  );
};

export default AppsHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
    paddingTop: 34,
    paddingBottom: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
    marginBottom: 18,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.DarkGreen,
  },
  decoy: {
    width: 24,
    height: 24,
  },
});
