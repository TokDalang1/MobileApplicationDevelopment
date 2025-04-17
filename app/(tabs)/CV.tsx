// Import core components from React Native
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

const CV = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/mount.jpeg")} // ganti dengan background image kamu
      style={styles.root}
      resizeMode="cover"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.header}>
          <ImageBackground
            source={require("@/assets/images/pic2.jpg")} // Ganti dengan gambar yang kamu punya
            style={styles.headerBackground}
            imageStyle={{ borderRadius: 23 }} // Supaya rounded sama seperti header aslinya
          >
            <Text style={styles.name}>Eden J Mirontoneng S.kom</Text>
            <Text style={styles.profession}>Software Engineer</Text>
          </ImageBackground>
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
        <View style={styles.container2}>
          <ImageBackground
            source={require("@/assets/images/kotlin.jpeg")} // Ganti dengan gambar yang kamu punya
            style={styles.headerBackgroundk}
            imageStyle={{ borderRadius: 23 }}
          ></ImageBackground>
          <ImageBackground
            source={require("@/assets/images/javapic.jpeg")} // Ganti dengan gambar yang kamu punya
            style={styles.headerBackground1}
            imageStyle={{ borderRadius: 23 }}
          ></ImageBackground>
          <ImageBackground
            source={require("@/assets/images/react-logo.png")} // Ganti dengan gambar yang kamu punya
            style={styles.headerBackground1}
            imageStyle={{ borderRadius: 23 }}
          ></ImageBackground>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CV;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    paddingBottom: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
    backgroundColor: "#1F7D53",
    borderRadius: 23,
    height: 180,
    borderWidth: 1,
    borderColor: "#1F7D53",
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    margin: 10, // gambar pe spasi di atas
  },

  headerBackground: {
    padding: 20,
    alignItems: "center",
    borderRadius: 23,
    height: 160,
  },
  container2: {
    padding: 20,
    alignItems: "center",
    borderRadius: 23,
    height: 160,
    flexDirection: "row",
  },
  headerBackground1: {
    padding: 20,
    alignItems: "center",
    marginLeft: 5,
  },
  headerBackgroundk: {
    padding: 20,
    alignItems: "center",
    marginLeft: 5,
    width: 100,
  },
  txtc: {
    fontStyle: "italic",
    color: "#ffffff",
    paddingLeft: 30,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  profession: {
    fontSize: 18,
    color: "#FFF5E4",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#7BFF00",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
    color: "#FFF5E4",
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
    color: "#FFF5E4",
    textAlign: "center",
  },
});
