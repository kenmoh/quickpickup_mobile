import OrderCard from "@/components/OrderCard";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
