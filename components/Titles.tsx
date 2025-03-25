import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Titles = () => {
  return (
    <View>
      <Text style={styles.title}>Registration</Text>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
    alignSelf: "flex-start",
  },
});
