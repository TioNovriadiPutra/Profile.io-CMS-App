import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../../themes/Colors";
import { Fonts } from "../../../themes/Fonts";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/navStore";

const AppsListContent = ({ dataList, label, action = false, dest }) => {
  const nav = useRecoilValue(navState);

  return (
    <View style={styles.container}>
      {action === false ? (
        <View style={styles.header}>
          <Text style={styles.label1}>No.</Text>
          <Text style={styles.label2}>{label}</Text>
        </View>
      ) : (
        <View style={styles.header2}>
          <Text style={styles.label1}>Quiz</Text>
          <Text style={styles.label1}>Date</Text>
          <Text style={styles.label1}>Action</Text>
        </View>
      )}

      <FlatList
        data={dataList}
        renderItem={({ item, index }) => {
          if (action === false) {
            return (
              <TouchableOpacity
                style={[
                  styles.btnContainer,
                  {
                    backgroundColor:
                      (index + 1) % 2 === 0 ? Colors.GreyBlur : Colors.White,
                  },
                ]}
                onPress={() =>
                  nav.navigate(dest, {
                    dataId: item.id,
                  })
                }
              >
                <Text style={styles.num}>{index + 1}</Text>
                <Text style={styles.labelName}>{item.label}</Text>
              </TouchableOpacity>
            );
          } else {
            return (
              <View
                style={[
                  styles.btnContainer,
                  {
                    backgroundColor:
                      (index + 1) % 2 === 0 ? Colors.GreyBlur : Colors.White,
                  },
                ]}
              >
                <Text style={styles.num}>{item.level}</Text>
                <Text style={styles.num}>
                  {item.updated_at.substring(0, 10)}
                </Text>
                <TouchableOpacity
                  style={styles.btnAction}
                  onPress={() =>
                    nav.navigate(dest, {
                      dataId: item.id,
                    })
                  }
                >
                  <Image source={require("../../../assets/images/edit.png")} />
                </TouchableOpacity>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default AppsListContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.Border,
    paddingVertical: 6,
    paddingHorizontal: 5,
    gap: 10,
  },
  header2: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.Border,
    paddingVertical: 6,
    paddingHorizontal: 5,
    gap: 10,
  },
  label1: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.Black,
    flex: 1,
    textAlign: "center",
  },
  label2: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.Black,
    flex: 4,
  },
  num: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
    flex: 1,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 5,
    paddingTop: 14,
    paddingBottom: 13,
  },
  labelName: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
    flex: 4,
  },
  btnAction: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
