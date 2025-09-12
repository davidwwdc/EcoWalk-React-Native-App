import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";

// firebase
import firebaseApp from "../../config/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

signInWithEmailAndPassword(auth, "david@gmail.com", "123456")
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log("Success!!!");
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error!!!");
    console.log(errorMessage);
    // ..
  });

const Home = (props: Props) => {
  const { email, password } = useLocalSearchParams();
  console.log("Logging in with:", email, password);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Do Something!</Text>
        </Pressable> */}
      </View>

      <View style={styles.footer}>
        <Link style={styles.linkText} href="profile">
          <Text>Profile</Text>
        </Link>
        {/* <Link style={styles.linkText} href="register">
          <Text>Register</Text>
        </Link> */}
        <Link style={styles.linkText} href="camera">
          <Text>Camera</Text>
        </Link>
        <Link style={styles.linkText} href="map">
          <Text>Map</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  placeholder: { color: "#777", fontSize: 16, textAlign: "center" },
  footer: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e5e7eb",
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
    flex: 1,
    marginTop: 16,
    textAlign: "center",
    color: "#3D5AFE",
  },
});
