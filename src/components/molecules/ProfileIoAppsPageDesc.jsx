import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";

const ProfileIoAppsPageDesc = ({ label, subLabel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.subLabel}>{subLabel}</Text>
    </View>
  );
};

export default ProfileIoAppsPageDesc;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    fontFamily: Fonts.SemiBold,
    fontSize: 22,
    color: Colors.DarkGreen,
  },
  subLabel: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: Colors.Placeholder,
    marginBottom: 57,
  },
});
