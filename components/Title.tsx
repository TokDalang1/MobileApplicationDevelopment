import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
});
