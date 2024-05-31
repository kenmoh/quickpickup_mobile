import OrderCard from "@/components/OrderCard";
import { Colors, themeMode } from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ordersApi from "@/api/orders";

const index = () => {
  const theme: { mode: themeMode } = { mode: "dark" };
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

  return (
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
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
