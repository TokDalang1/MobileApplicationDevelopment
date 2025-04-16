import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArrowBack } from "@/app/src/asset/ArrowBack";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <ArrowBack />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 22,
    marginLeft: 26,
    alignContent: "center",
  },
});
