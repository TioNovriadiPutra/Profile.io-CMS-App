import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../../themes/Colors";

const QuizQuestionFooter = ({ edit, deleteQuiz }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={edit}>
        <Image source={require("../../../assets/images/edit.png")} />
      </TouchableOpacity>

      <TouchableOpacity onPress={deleteQuiz}>
        <Image source={require("../../../assets/images/delete.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default QuizQuestionFooter;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
    paddingBottom: 12,
    borderTopWidth: 2,
    borderTopColor: Colors.Border,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 22,
    paddingHorizontal: 14.63,
  },
});
