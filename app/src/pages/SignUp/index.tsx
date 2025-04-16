import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../componentss/molecules/Header_SignUp";
import TextInput from "../../componentss/molecules/TextInput";
import Button from "../../componentss/atoms/Button";
import Gap from "../../componentss/atoms/Gap";

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.innerinput}>
            <Text style={styles.txt}>Add Photo</Text>
          </View>
        </View>
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={24} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  inputContainer: {
    marginTop: 26,
    marginLeft: 125,
    borderColor: "#8D92A3",
    borderWidth: 2,
    borderRadius: 65,
    borderStyle: "dashed",
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  innerinput: {
    width: 90,
    height: 90,
    borderRadius: 55,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "#8D92A3",
    fontSize: 14,
    width: 40,
    height: 42,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
});
