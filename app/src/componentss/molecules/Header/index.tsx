import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
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
