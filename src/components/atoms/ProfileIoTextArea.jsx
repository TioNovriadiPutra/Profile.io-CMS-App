import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoTextArea = ({ name, defaultValue, control, placeholder }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={field.value}
        placeholder={placeholder}
        placeholderTextColor={Colors.Placeholder}
        onChangeText={field.onChange}
        style={styles.input}
        multiline
      />
    </View>
  );
};

export default ProfileIoTextArea;

const styles = StyleSheet.create({
  container: {
    height: 155,
    borderWidth: 1.5,
    borderColor: Colors.Border,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 13,
    textAlignVertical: "top",
  },
  input: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
  },
});
