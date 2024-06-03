import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Colors, themeMode } from "@/constants/Colors";
import OrderCard from "@/components/OrderCard";
import { ThemeContext } from "@/context/themeContext";

const myOrder = () => {
  const { theme } = useContext(ThemeContext);
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

export default myOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
