import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import AppsFormContent from "../organisms/contents/AppsFormContent";
import { Colors } from "../../themes/Colors";

const ModalAddQuiz = ({ visible, dataInput, onSubmit }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.formContainer}>
          <AppsFormContent
            dataInput={dataInput}
            label={"Confirm"}
            onSubmit={onSubmit}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddQuiz;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.Modal,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    height: "90%",
    width: "90%",
    backgroundColor: Colors.White,
    borderRadius: 8,
    paddingTop: 35,
  },
});
