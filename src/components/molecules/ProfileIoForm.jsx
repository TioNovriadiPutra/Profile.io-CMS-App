import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ProfileIoTextInput from "../atoms/ProfileIoTextInput";
import ProfileIoDropdown from "../atoms/ProfileIoDropdown";
import ProfileIoDatePicker from "../atoms/ProfileIoDatePicker";
import ProfileIoImagePicker from "../atoms/ProfileIoImagePicker";
import ProfileIoColorPicker from "../atoms/ProfileIoColorPicker";
import ProfileIoTextArea from "../atoms/ProfileIoTextArea";
import ProfileIoOption from "../atoms/ProfileIoOption";

const ProfileIoForm = ({ dataInput }) => {
  return (
    <FlatList
      data={dataInput}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        if (item.type === "text") {
          return (
            <ProfileIoTextInput
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
            />
          );
        } else if (item.type === "password") {
          return (
            <ProfileIoTextInput
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
              secure={true}
            />
          );
        } else if (item.type === "dropdown") {
          return (
            <ProfileIoDropdown
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
              options={item.options}
            />
          );
        } else if (item.type === "date") {
          return (
            <ProfileIoDatePicker
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
            />
          );
        } else if (item.type === "image") {
          return (
            <ProfileIoImagePicker
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
            />
          );
        } else if (item.type === "color") {
          return (
            <ProfileIoColorPicker
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
            />
          );
        } else if (item.type === "textarea") {
          return (
            <ProfileIoTextArea
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
            />
          );
        } else if (item.type === "options") {
          return (
            <ProfileIoOption
              name={item.name}
              defaultValue={item.defaultValue}
              control={item.control}
              placeholder={item.placeholder}
            />
          );
        }
      }}
    />
  );
};

export default ProfileIoForm;

const styles = StyleSheet.create({
  list: {
    gap: 22,
  },
});
