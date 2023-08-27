import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { useController } from "react-hook-form";
import { Fonts } from "../../themes/Fonts";

const ProfileIoTextInput = ({
  name,
  defaultValue,
  control,
  placeholder,
  secure = false,
}) => {
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
        secureTextEntry={secure}
      />
    </View>
  );
};

export default ProfileIoTextInput;

const styles = StyleSheet.create({
  container: {
    height: 47,
    borderWidth: 1.5,
    borderColor: Colors.Border,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  input: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
  },
});
