import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, themeMode } from "@/constants/Colors";
import OrderCard from "@/components/OrderCard";

const completedOrder = () => {
  const theme: { mode: themeMode } = { mode: "dark" };
  let activeColor = Colors[theme.mode];
  return (
    <View
      style={[styles.container, { backgroundColor: activeColor.background }]}
    >
      <OrderCard link="signin" />
      <OrderCard link="signup" />
      <OrderCard link="signupDispath" />
    </View>
  );
};

export default completedOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
