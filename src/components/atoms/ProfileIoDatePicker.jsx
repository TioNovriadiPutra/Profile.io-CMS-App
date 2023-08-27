import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../themes/Colors";
import { useController } from "react-hook-form";
import { Fonts } from "../../themes/Fonts";
import DateTimePicker from "@react-native-community/datetimepicker";

const ProfileIoDatePicker = ({ name, defaultValue, control, placeholder }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    setShowDatePicker(false);
    setDate(selectedDate);
    field.onChange(selectedDate);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowDatePicker(true)}
    >
      <Text
        style={[
          styles.input,
          { color: field.value === null ? Colors.Placeholder : Colors.Black },
        ]}
      >
        {field.value === null
          ? placeholder
          : field.value.toISOString().substring(0, 10)}
      </Text>

      {showDatePicker === true && (
        <DateTimePicker value={date} mode="date" is24Hour onChange={onChange} />
      )}
    </TouchableOpacity>
  );
};

export default ProfileIoDatePicker;

const styles = StyleSheet.create({
  container: {
    height: 47,
    borderWidth: 1.5,
    borderColor: Colors.Border,
    borderRadius: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
});
