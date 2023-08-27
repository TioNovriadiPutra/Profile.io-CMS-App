import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/app/Home";
import CustomDrawer from "../../components/templates/CustomDrawer";
import { Image } from "expo-image";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";
import AddSkill from "../../pages/app/AddSkill";
import SubSkill from "../../pages/app/SubSkill";
import AddSubSkill from "../../pages/app/AddSubSkill";
import SubSkillQuiz from "../../pages/app/SubSkillQuiz";
import AddQuiz from "../../pages/app/AddQuiz";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ routes }) => ({
        drawerIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../../assets/images/arrowRightActive.png")
                : require("../../assets/images/arrowRight.png")
            }
            style={styles.icon}
            transition={1000}
          />
        ),
        drawerActiveBackgroundColor: Colors.White,
        drawerInactiveBackgroundColor: Colors.White,
        drawerLabelStyle: {
          fontFamily: Fonts.Medium,
          fontSize: 18,
        },
        drawerActiveTintColor: Colors.Green,
        drawerInactiveTintColor: Colors.Placeholder,
      })}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddSkill"
        component={AddSkill}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubSkill"
        component={SubSkill}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddSubSkill"
        component={AddSubSkill}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubSkillQuiz"
        component={SubSkillQuiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddQuiz"
        component={AddQuiz}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
  },
});
