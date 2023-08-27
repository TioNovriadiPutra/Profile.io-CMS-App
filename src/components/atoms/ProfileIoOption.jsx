import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoOption = ({ name, defaultValue, control, placeholder }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  return (
    <View>
      <FlatList
        data={field.value}
        style={styles.list}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                value={item.label}
                placeholder={placeholder}
                placeholderTextColor={Colors.Placeholder}
                onChangeText={(text) => {
                  let data = field.value;
                  Object.assign(data[index], {
                    label: text,
                  });
                  field.onChange(data);
                }}
                style={styles.label}
              />
            </View>

            {index === 0 ? (
              <View>
                <Image source={require("../../assets/images/xWhite.png")} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  let data = field.value;
                  data.splice(index, 1);
                  field.onChange(data);
                }}
              >
                <Image source={require("../../assets/images/x.png")} />
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.btnPlus}
        onPress={() => {
          const data = field.value;
          data.push({
            label: "",
            correct: false,
          });
          field.onChange(data);
        }}
      >
        <Image source={require("../../assets/images/plus.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileIoOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputContainer: {
    height: 47,
    borderWidth: 1.5,
    borderColor: Colors.Border,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 18,
    flex: 1,
  },
  btnPlus: {
    alignSelf: "center",
    marginTop: 12,
  },
  list: {
    gap: 12,
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
  },
});
