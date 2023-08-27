import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/navStore";

const ProfileIoHamburger = () => {
  const nav = useRecoilValue(navState);

  return (
    <TouchableOpacity style={styles.container} onPress={() => nav.openDrawer()}>
      <Image
        source={require("../../assets/images/hamburger.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default ProfileIoHamburger;

const styles = StyleSheet.create({
  image: {
    width: 18,
    height: 16,
  },
  container: {
    backgroundColor: Colors.GreenBlur,
    paddingHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
