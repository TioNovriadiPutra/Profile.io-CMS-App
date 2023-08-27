import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const ProfileIoImageSubmitButton = ({ source, onSubmit }) => {
  return (
    <TouchableOpacity onPress={onSubmit}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ProfileIoImageSubmitButton;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
