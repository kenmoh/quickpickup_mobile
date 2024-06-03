import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Divider from "@/components/Divider";
import DetailLabel from "@/components/DetailLabel";
import Status from "@/components/Status";
import { Colors, themeMode } from "@/constants/Colors";
import ordersApi from "@/api/orders";
import { OrderType } from "@/utils/types";
import CustomBtn from "@/components/CustomBtn";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const IMG_HEIGHT = 300;
const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { id } = useLocalSearchParams();

  const { theme } = useContext(ThemeContext);
  let activeColor = Colors[theme.mode];

  const { data, error, isFetching } = useQuery({
    queryKey: ["orders", id],
    queryFn: () => ordersApi.orderDetails(id),
  });

  if (isFetching) {
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

  const order: OrderType = data?.data;

  return (
    <View
      style={{
        backgroundColor: activeColor.background,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="inverted" />
      <View style={[styles.mainContainer]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <Image
            source={order?.order_photo_url}
            // placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
            style={styles.image}
          />

          <View style={{ paddingHorizontal: 15 }}>
            <Text
              style={{
                marginTop: 25,
                marginBottom: 10,
                textTransform: "uppercase",
                fontSize: 16,
                fontWeight: "bold",
                color: activeColor.text,
              }}
            >
              Order Details
            </Text>
            <View
              style={{
                marginBottom: 25,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Status
                text={order?.order_status!}
                backgroundColor={
                  order?.order_status === "Delivered"
                    ? Colors.delivered
                    : order.order_status === "Pickedup"
                    ? Colors.pickUpColor
                    : order.order_status === "Received"
                    ? Colors.success
                    : Colors.pendingColor
                }
                pillWidth={90}
                pVertical={5}
                pHorizontal={6}
                textColor={
                  order?.order_status === "Pending"
                    ? "#c8553d"
                    : order?.order_status === "Received"
                    ? "#25a18e"
                    : order?.order_status === "Delivered"
                    ? "#27187e"
                    : "#e8ac65"
                }
              />
              <TouchableOpacity
                hitSlop={25}
                onPress={() =>
                  router.push({
                    pathname: "/orderMap",
                    params: {
                      id,
                      distance: order?.distance,
                      cost: order?.total_cost,
                      origin: order?.origin,
                      destination: order?.destination,
                    },
                  })
                }
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 10,
                  borderWidth: 1.5,
                  borderColor: activeColor.tabIconDefault,
                  borderRadius: 20,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Ionicons
                  name="map-outline"
                  size={24}
                  color={activeColor.tabIconDefault}
                />
                <Text style={{ color: activeColor.tabIconDefault }}>
                  View on map
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <AntDesign name="user" size={30} color="gray" />
              <Divider />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <Text style={[styles.text, { color: activeColor.text }]}>
                Sender Details
              </Text>
              <View>
                <DetailLabel
                  lable="Name"
                  value={order?.vendor_username || ""}
                />
                <DetailLabel
                  lable="Phone"
                  value={order?.owner_phone_number || ""}
                />
                <DetailLabel lable="Location" value={order?.origin || ""} />
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Feather name="box" size={30} color="gray" />
              <Divider />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <Text style={[styles.text, { color: activeColor.text }]}>
                Order Details
              </Text>
              <View>
                <DetailLabel lable="Name" value={order?.name || ""} />
                <DetailLabel lable="Origin" value={order?.origin || ""} />
                <DetailLabel
                  lable="Destination"
                  value={order?.destination || ""}
                />
                <DetailLabel lable="Distance" value={order?.distance || ""} />
                <DetailLabel lable="Total Cost" value={order?.total_cost} />
                <DetailLabel lable="Commission" value={order?.deduction} />
                <DetailLabel
                  lable="Amount payable"
                  value={order?.amount_payable}
                />
                <View style={{ marginVertical: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: activeColor.tabIconDefault,
                      marginBottom: 5,
                    }}
                  >
                    Description:
                  </Text>
                  <Text
                    style={{ fontSize: 16, color: activeColor.tabIconDefault }}
                  >
                    {order?.description}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons name="bike-fast" size={30} color="grey" />
              <Divider />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <Text style={[styles.text, { color: activeColor.text }]}>
                Rider Details
              </Text>
              <DetailLabel lable="Rider Name" value={order?.rider_name || ""} />
              <DetailLabel
                lable="Phone Number"
                value={order?.rider_phone_number!}
              />
              <DetailLabel
                lable="Company Name"
                value={order?.dispatch_company_name || ""}
              />
              <DetailLabel
                lable="Company Phone"
                value={order?.dispatch_company_phone_numer || ""}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <CustomBtn
          btnBorderRadius={5}
          btnColor="orange"
          label="Pickup"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  mainContainer: {
    flex: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,

    marginVertical: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  image: {
    height: IMG_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
});
