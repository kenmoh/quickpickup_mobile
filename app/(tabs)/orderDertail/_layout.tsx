import { withLayoutContext } from "expo-router";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

const OrderDetailTopTab = withLayoutContext(
  createMaterialTopTabNavigator().Navigator
);

const OrderDetailLayout = () => {
  return (
    <OrderDetailTopTab
      screenOptions={{
        tabBarAndroidRipple: { borderless: false },
        tabBarPressColor: "white",
        tabBarStyle: {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBlockColor: "red",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <OrderDetailTopTab.Screen
        name="[id]"
        options={{ title: "order details" }}
      />
      <OrderDetailTopTab.Screen
        name="[id]"
        options={{ title: "order details with map" }}
      />
    </OrderDetailTopTab>
  );
};

export default OrderDetailLayout;
