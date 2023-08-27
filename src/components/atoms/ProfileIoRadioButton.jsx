import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoRadioButton = ({ data, field, closeModal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{data.label}</Text>
      <RadioButton
        value={data.value}
        color={Colors.Green}
        status={
          field.value === null
            ? "unchecked"
            : field.value.value === data.value
            ? "checked"
            : "unchecked"
        }
        onPress={() => {
          field.onChange(data);
          closeModal();
        }}
      />
    </View>
  );
};

export default ProfileIoRadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.Black,
  },
});
