import {
  Animated,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";
import ProfileIoRadioButton from "../atoms/ProfileIoRadioButton";

const ProfileIoDropdownModal = ({
  visible,
  setVisible,
  title,
  field,
  options,
}) => {
  const formHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible === true) {
      Animated.timing(formHeight, {
        toValue: 380,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  const closeModal = () => {
    Animated.timing(formHeight, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  return (
    <Modal visible={visible} transparent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.backdrop}></View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.container, { height: formHeight }]}>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          data={options}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ProfileIoRadioButton
              data={item}
              field={field}
              closeModal={closeModal}
            />
          )}
        />
      </Animated.View>
    </Modal>
  );
};

export default ProfileIoDropdownModal;

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    backgroundColor: Colors.Modal,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.Black,
    textAlign: "center",
    marginBottom: 58,
  },
  list: {
    gap: 30,
  },
});
