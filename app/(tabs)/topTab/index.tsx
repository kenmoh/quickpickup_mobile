import { useContext, useState } from "react";
import OrderCard from "@/components/OrderCard";
import { Colors, themeMode } from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Switch,
} from "react-native";
import ordersApi from "@/api/orders";
import { ThemeContext } from "@/context/themeContext";

const index = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(theme.mode === "dark");
  let activeColor = Colors[theme.mode];
  const {
    data: order,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: ordersApi.getListings,
  });

  const toggleSwitch = () => {
    toggleTheme({ newTheme: { mode: theme.mode } }),
      setIsEnabled((previousState) => !previousState);
  };

  if (isLoading || isFetching) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: activeColor.background,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={30} color={activeColor.tabIconDefault} />
      </View>
    );
  }
  if (error) {
    <View
      style={{
        flex: 1,
        backgroundColor: activeColor.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Something went wrong!</Text>
    </View>;
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: activeColor.background }}>
        <FlatList
          data={order?.data}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({ item }) => <OrderCard order={item} />}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          vertical
        />
        <Switch
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
