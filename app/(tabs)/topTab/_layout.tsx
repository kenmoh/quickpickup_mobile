import { StyleSheet } from "react-native";
import { withLayoutContext } from "expo-router";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors, themeMode } from "@/constants/Colors";

const TopTabBar = withLayoutContext(createMaterialTopTabNavigator().Navigator);

const TopTabLayout = () => {
  const theme: { mode: themeMode } = { mode: "dark" };
  let activeColor = Colors[theme.mode];
  return (
    <TopTabBar
      screenOptions={{
        tabBarLabelStyle: {
          color: activeColor.tabIconDefault,
        },
        tabBarAndroidRipple: { borderless: false },
        tabBarPressColor: "gray",
        tabBarStyle: {
          borderBottomColor: activeColor.borderolor,
          borderBottomWidth: StyleSheet.hairlineWidth,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: activeColor.background,
        },
      }}
    >
      <TopTabBar.Screen name="index" options={{ title: "Orders" }} />
      <TopTabBar.Screen name="myOrder" options={{ title: "My Orders" }} />
      <TopTabBar.Screen
        name="completedOrder"
        options={{ title: "Delivered" }}
      />
    </TopTabBar>
  );
};

export default TopTabLayout;

const styles = StyleSheet.create({});
