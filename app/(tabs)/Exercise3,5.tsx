import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "@/components/Input";
import Title from "@/components/Title";
import Button from "@/components/Button";

const App = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.container}>
          <Title title="Welcome" />
          <Input label="Username" placeholder="Masukan Username anda" />
          <Input label="Pasword" placeholder="Masukan Pasword anda" />
          <Button buttonText="Login" color="blue" />
          <Button buttonText="Google" color="red" />
          <Button buttonText="IG" color="black" />
          <Button buttonText="Facebook" color="blue" />
          <Button buttonText="Apple" color="black" />
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
  },
  inputContainer: {
    marginBottom: 15,
  },
});
