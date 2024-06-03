import { Link, Tabs } from "expo-router";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import { Pressable } from "react-native";
import AppHeader from "@/components/AppHeader";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const HeaderLeft = ({ link, iconName }: { link: string; iconName: any }) => {
  return (
    <Link href={link}>
      <Pressable>
        {({ pressed }) => (
          <AntDesign
            name={iconName}
            size={20}
            color={"grey"}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
};

export default function TabLayout() {
  const { theme } = useContext(ThemeContext);
  let activeColor = Colors[theme.mode];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor.text,
        headerTitleAlign: "center",
        headerTintColor: activeColor.text,
        tabBarStyle: {
          backgroundColor: activeColor.background,
        },
        headerStyle: {
          borderBottomColor: "#aaa",
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: activeColor.background,
        },
      }}
    >
      <Tabs.Screen
        name="topTab"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerTitle: () => <AppHeader />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "New Order",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
