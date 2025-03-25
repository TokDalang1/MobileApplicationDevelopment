import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const UserListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{item.last_name}</Text> {item.first_name}
        </Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    bordercolor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: "gray",
    borderWidth: 0.1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
  email: {
    color: "gray",
    fontSize: 14,
  },
});
