import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

const OrderLayout = () => {
  return (
    <Stack
      screenOptions={{
        animation: "fade_from_bottom",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "List order" }} />
    </Stack>
  );
};

export default OrderLayout;

const styles = StyleSheet.create({});
