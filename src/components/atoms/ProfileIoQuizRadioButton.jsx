import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoQuizRadioButton = ({ data, field, questionIndex }) => {
  useState;

  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item, index }) => (
        <View style={styles.container}>
          <RadioButton
            value={item.label}
            color={Colors.Green}
            status={item.correct === true ? "checked" : "unchecked"}
            onPress={() => {
              let newOptionData = data.map((tmp) =>
                Object.assign(tmp, {
                  correct: false,
                })
              );

              Object.assign(newOptionData[index], {
                correct: true,
              });

              let newData = field.value;
              Object.assign(newData[questionIndex], {
                options: newOptionData,
              });

              field.onChange(newData);
            }}
          />

          <Text style={styles.label}>{item.label}</Text>
        </View>
      )}
    />
  );
};

export default ProfileIoQuizRadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
    flex: 1,
  },
  list: {
    gap: 17.5,
    marginBottom: 30,
    marginTop: 24,
  },
});
