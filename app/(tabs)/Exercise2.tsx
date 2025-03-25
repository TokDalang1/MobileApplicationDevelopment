// Import core components from React Native
import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

const CV = () => {
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={require("@/assets/images/fotoe.jpg")}
          />
          <Text style={styles.name}>Eden J Mirontoneng S.kom</Text>
          <Text style={styles.profession}>Software Engineer</Text>
        </View>

        {/* About Me */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.text}>
            Passionate software engineer with experience in web and mobile
            development. Skilled in React Native, JavaScript, and UI/UX design.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.subTitle}>Software Engineer - Tech Company</Text>
          <Text style={styles.text}>2026 - Present</Text>
          <Text style={styles.text}>
            - Developed mobile applications using React Native.
          </Text>
          <Text style={styles.text}>
            - Collaborated with UX designers to improve user experience.
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.subTitle}>
            Bachelor's Degree in Computer Science
          </Text>
          <Text style={styles.text}>Klabat University, 2021 - 2026</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CV;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 40,
    paddingBottom: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#1F7D53",
    borderRadius: 23,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    margin: 10, // gambar pe spasi di atas
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profession: {
    fontSize: 18,
    color: "#FFF5E4",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
});
