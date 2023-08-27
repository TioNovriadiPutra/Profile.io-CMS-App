import { View, Modal, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";

const LoadingModal = ({ visible }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.loader}>
          <ActivityIndicator size={"large"} />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Modal,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    backgroundColor: Colors.White,
    padding: 20,
    borderRadius: 20,
  },
});
