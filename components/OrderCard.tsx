import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

import { Colors, themeMode } from "@/constants/Colors";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { OrderType } from "@/utils/types";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const OrderCard = ({ order }: { order: OrderType }) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = Colors[theme.mode];
  return (
    <Link href={`(orderDetail)/${order?.id}`} asChild>
      <TouchableOpacity>
        <View style={[styles.container]}>
          <View style={{ flex: 1 }}>
            <Image
              source={order?.order_photo_url}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
              style={styles.image}
            />
          </View>

          <View style={{ flex: 4 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 5,
                fontFamily: "Poppins-Bold",
                letterSpacing: 1.2,
                color: activeColor.text,
              }}
            >
              {order?.name}
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 7.5 }}
            >
              <MaterialIcons
                name="trip-origin"
                size={20}
                color={activeColor.icon}
              />
              <Text style={[styles.textStyle, { color: activeColor.text }]}>
                {order?.origin}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 7.5,
              }}
            >
              <EvilIcons name="location" size={20} color={activeColor.icon} />
              <Text style={[styles.textStyle, { color: activeColor.text }]}>
                {order?.destination}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                marginTop: 5,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text style={{ color: activeColor.text }}> ₦ </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    fontFamily: "Poppins-Regular",
                    letterSpacing: 1.4,
                    color: activeColor.text,
                  }}
                >
                  {order?.total_cost}
                </Text>
              </View>
              <Text
                style={[
                  styles.textStyle,
                  { color: activeColor.tabIconDefault },
                ]}
              >
                28-05-2024
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: activeColor.borderolor,
            marginVertical: 10,
          }}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    gap: 20,
    marginVertical: 5,
  },

  textStyle: {
    fontFamily: "Poppins-Regular",
    letterSpacing: 1,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 10,
  },
});
