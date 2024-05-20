import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          animation: "fade_from_bottom",
          title: "Profile",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;

const styles = StyleSheet.create({});
