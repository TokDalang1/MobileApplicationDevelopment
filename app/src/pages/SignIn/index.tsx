import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../componentss/molecules/Header";
import TextInput from "../../componentss/molecules/TextInput";
import Button from "../../componentss/atoms/Button";
import Gap from "../../componentss/atoms/Gap";

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Sign In" />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
        />
      </View>
    </View>
  );
};

export default SignIn;

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
});
