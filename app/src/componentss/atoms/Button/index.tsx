import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ label, color = "#02CF8E", textColor = "#020202" }) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (color) => ({
    backgroundColor: color,
    borderRadius: 8,
    paddingVertical: 12,
  }),
  label: (textColor) => ({
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: textColor,
  }),
});
