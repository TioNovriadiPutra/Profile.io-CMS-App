import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import SecondContainer from "../../../containers/SecondContainer";
import { Colors } from "../../../themes/Colors";
import { useController, useForm } from "react-hook-form";
import { Fonts } from "../../../themes/Fonts";
import ProfileIoQuizRadioButton from "../../atoms/ProfileIoQuizRadioButton";
import ModalAddQuiz from "../../templates/ModalAddQuiz";
import QuizQuestionFooter from "../footers/QuizQuestionFooter";

const QuizListContent = ({ name, defaultValue, controlFirstPage }) => {
  const { field } = useController({
    name,
    defaultValue,
    control: controlFirstPage,
  });

  const { control, handleSubmit, reset } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [choosen, setChoosen] = useState(null);

  return (
    <SecondContainer>
      <FlatList
        data={field.value}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <View style={styles.numContainer}>
              <Text style={styles.num}>{index + 1}</Text>
            </View>

            <Text style={styles.question}>{item.question}</Text>

            <ProfileIoQuizRadioButton
              data={item.quizOptions}
              field={field}
              questionIndex={index}
            />

            <QuizQuestionFooter
              edit={() => {
                setShowModalUpdate(true);
                setChoosen(index);
              }}
              deleteQuiz={() => {
                let data = field.value;
                data.splice(index, 1);
                field.onChange(data);
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity style={styles.btn} onPress={() => setShowModal(true)}>
        <Image source={require("../../../assets/images/plusQuiz.png")} />
      </TouchableOpacity>

      <ModalAddQuiz
        visible={showModal}
        dataInput={[
          {
            type: "textarea",
            name: "question",
            defaultValue: "",
            control,
            placeholder: "Question",
          },
          {
            type: "options",
            name: "quizOptions",
            defaultValue: [
              {
                label: "",
                correct: false,
              },
            ],
            control,
            placeholder: "Option",
          },
        ]}
        onSubmit={handleSubmit((data) => {
          const newData = field.value;
          newData.push(data);
          field.onChange(newData);
          setShowModal(false);
          reset();
        })}
      />

      <ModalAddQuiz
        visible={showModalUpdate}
        dataInput={[
          {
            type: "textarea",
            name: "question",
            defaultValue:
              field.value.length === 0 || choosen === null
                ? null
                : field.value[choosen].question,
            control,
            placeholder: "Question",
          },
          {
            type: "options",
            name: "options",
            defaultValue:
              field.value.length === 0 || choosen === null
                ? null
                : field.value[choosen].options,
            control,
            placeholder: "Option",
          },
        ]}
        onSubmit={handleSubmit((data) => {
          const newData = field.value;
          newData[choosen] = data;
          field.onChange(newData);
          setShowModalUpdate(false);
          setChoosen(null);
          reset();
        })}
      />
    </SecondContainer>
  );
};

export default QuizListContent;

const styles = StyleSheet.create({
  btn: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: Colors.Green,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 22,
    right: 22,
  },
  questionContainer: {
    backgroundColor: Colors.White,
    borderRadius: 8,
    paddingHorizontal: 11,
    paddingTop: 18,
  },
  numContainer: {
    width: 52,
    height: 24,
    backgroundColor: Colors.Green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  num: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.White,
  },
  question: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.Black,
    marginTop: 12,
  },
  list: {
    gap: 14,
    paddingBottom: 100,
  },
});
