import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "@/components/Inputo";
import Title from "@/components/Titles";
import Button from "@/components/Buttons";

const App = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.container}>
          <Title title="Registration" />
          <Input label="Name" placeholder="Masukan nama lengkap anda" />
          <Input label="Username" placeholder="Masukan username anda" />
          <Input label="Email" placeholder="Masukan email anda" />
          <Input label="Address" placeholder="Masukan alamat anda" />
          <Input
            label="Phone Number"
            placeholder="Masukan nomor telepon anda"
          />
          <Button buttonText="Register" color="purple" />
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
