import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { Link, useRouter} from "expo-router";
import { useUser } from "./UserContext";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {user, setUser} = useUser();

  function handleLogin(email: string, password: string) {
  // Implement your login logic here
  setUser({name: 'Unknown', email, password});
  router.replace("(main)/home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Pressable style={styles.button} onPress={() => handleLogin(email, password)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
      <Link style={styles.linkText} href="register">
        <Text>Don't have an account? Register</Text>
      </Link>
    </View>
  );
};

export default Login;

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
