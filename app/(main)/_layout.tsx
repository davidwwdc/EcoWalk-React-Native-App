import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <SafeAreaProvider>
        <Stack>
        <Stack.Screen
          name="home"
          options={{title: "Home",}}
        />
        <Stack.Screen
          name="profile"
          options={{title: "Profile",}}
        />
        <Stack.Screen
          name="camera"
          options={{title: "Camera",}}
        />
        <Stack.Screen
          name="map"
          options={{title: "Map",}}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default MainLayout;
