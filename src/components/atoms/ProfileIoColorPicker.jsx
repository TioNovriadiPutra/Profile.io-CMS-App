import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { ColorPicker } from "react-native-color-picker";

const ProfileIoColorPicker = ({ name, defaultValue, control, placeholder }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const [showPicker, setShowPicker] = useState(false);

  const pickColor = (color) => {
    field.onChange(color);
    setShowPicker(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={field.value}
          placeholder={placeholder}
          placeholderTextColor={Colors.Placeholder}
          onChangeText={field.onChange}
          style={styles.label}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: field.value }]}
          onPress={() => setShowPicker(true)}
        />

        <Modal visible={showPicker} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <ColorPicker
                style={styles.picker}
                hideSliders
                onColorSelected={pickColor}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ProfileIoColorPicker;

const styles = StyleSheet.create({
  container: {
    height: 47,
    borderWidth: 1.5,
    borderColor: Colors.Border,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
    flex: 5,
  },
  button: {
    height: "50%",
    width: "10%",
    borderWidth: 1,
    borderColor: Colors.Border,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.ModalDark,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    backgroundColor: Colors.Grey,
    width: "90%",
    height: "80%",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  picker: {
    flex: 1,
  },
});
