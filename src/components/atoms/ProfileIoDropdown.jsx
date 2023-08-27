import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";
import ProfileIoDropdownModal from "../molecules/ProfileIoDropdownModal";

const ProfileIoDropdown = ({
  name,
  defaultValue,
  control,
  placeholder,
  options,
}) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowModal(true)}
    >
      <Text
        style={[
          styles.input,
          { color: field.value === null ? Colors.Placeholder : Colors.Black },
        ]}
      >
        {field.value === null ? placeholder : field.value.label}
      </Text>

      <ProfileIoDropdownModal
        visible={showModal}
        setVisible={setShowModal}
        title={placeholder}
        field={field}
        options={options}
      />
    </TouchableOpacity>
  );
};

export default ProfileIoDropdown;

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
  },
});
