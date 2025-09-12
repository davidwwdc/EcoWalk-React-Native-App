import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { UserProvider } from "./UserContext";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <SafeAreaProvider>
      <UserProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            title: "Register",
          }}
        />
        <Stack.Screen
          name="(main)"
          options={{headerShown: false }}
        />
      </Stack>
      </UserProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
