import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";

const ProfileIoImagePicker = ({ name, defaultValue, control, placeholder }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      field.onChange({
        uri: result.assets[0].uri,
        name: result.assets[0].uri.split("/").pop(),
        type: mime.lookup(result.assets[0].uri.split("/").pop()),
      });
    }
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={[
          styles.container,
          { borderWidth: field.value === null ? 3 : 0 },
        ]}
        onPress={pickImage}
      >
        <Image
          source={field.value === null ? placeholder : { uri: field.value.uri }}
          style={field.value === null ? styles.placeholderImage : styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={styles.name}>
        {field.value === null ? "Sub Skill Image" : field.value.name}
      </Text>
    </View>
  );
};

export default ProfileIoImagePicker;

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    gap: 10,
  },
  container: {
    width: 258,
    height: 124,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
  },
  name: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Grey,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
    aspectRatio: 1,
  },
  placeholderImage: {
    width: 44.83,
    height: 44.83,
  },
});
