import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { useUser } from "../UserContext";

type Props = {};

const Profile = (props: Props) => {
    const {user, setUser} = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profile}>
        <View style={styles.profileRow}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.data}>{user?.name}</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.data}>{user?.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  profile: {
    flexDirection: "row",
  },
  profileRow: {
    flex: 1,
    flexDirection: "row",
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 30,
    paddingRight: 20,
    textAlign: "right",
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: "#e5e7eb",
    color: "#4c4d4fff",
  },
  data: {
    flex: 2,
    fontSize: 16,
    marginBottom: 30,
    paddingLeft: 10,
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3D5AFE",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  linkText: {
    marginTop: 16,
    textAlign: "center",
    color: "#3D5AFE",
  },
});
