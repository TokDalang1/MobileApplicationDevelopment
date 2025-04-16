import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowBack } from "@/app/src/asset/ArrowBack";

const LogoButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <ArrowBack style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default LogoButton;

const styles = StyleSheet.create({
  button: {
    paddingLeft: 24,
    padding: 24,
    justifyContent: "center",
  },
  arrow: {
    width: 24,
    height: 24,
  },
});
