import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan warna merah dan kotak hitam-kuning-hitam */}
      <View style={styles.header}>
        <View style={styles.blackBox1} />
        <View style={styles.yellowBox1} />
        <View style={styles.blackBox1} />
      </View>

      {/* Logo dan Nama Universitas */}
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo-with-motto-3.png")}
        />
      </View>

      {/* Bagian bawah dengan warna biru dan kotak hitam-kuning-hitam */}
      <View style={styles.footer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "red",
    padding: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 20,
  },
  blackBox: {
    width: 80,
    height: 80,
    backgroundColor: "black",
  },
  yellowBox: {
    width: 80,
    height: 80,
    backgroundColor: "yellow",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    marginBottom: 10,
  },
  universityName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 16,
    fontStyle: "italic",
  },
  blackBox1: {
    width: 80,
    height: 80,
    backgroundColor: "black",
    margin: 30,
    marginTop: 1,
  },
  yellowBox1: {
    width: 80,
    height: 80,
    backgroundColor: "yellow",
  },
});

export default App;
