import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/navStore";

const ProfileIoBackButton = ({ dest, params }) => {
  const nav = useRecoilValue(navState);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => nav.navigate(dest, params)}
    >
      <Image
        source={require("../../assets/images/back.png")}
        style={styles.container}
      />
    </TouchableOpacity>
  );
};

export default ProfileIoBackButton;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
});
