import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../themes/Colors";
import { Image } from "expo-image";
import { Fonts } from "../../themes/Fonts";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AuthContext } from "../../utils/context/AuthContext";
import { useRecoilValue } from "recoil";
import { dataUserState } from "../../store/authStore";

const CustomDrawer = (props) => {
  const dataUser = useRecoilValue(dataUserState);

  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.name}>{dataUser}</Text>

      <Text style={styles.title}>Navigation</Text>

      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: 8 }}
        {...props}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Text style={styles.title}>Options</Text>

      <DrawerItem
        label="Logout"
        icon={({ focused, color, size }) => (
          <Image
            source={require("../../assets/images/logout.png")}
            style={styles.image}
            transition={1000}
          />
        )}
        labelStyle={styles.label}
        onPress={logout}
      />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.Green,
    marginTop: 16,
  },
  title: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.LightGrey,
    marginTop: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  label: {
    fontFamily: Fonts.Medium,
    fontSize: 18,
    color: Colors.Black,
  },
  logo: {
    width: 54,
    height: 54,
    resizeMode: "cover",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Border,
  },
});
