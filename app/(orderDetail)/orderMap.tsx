import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Stack, useLocalSearchParams } from "expo-router";
import { Colors, themeMode } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const orderMap = () => {
  const params = useLocalSearchParams();
  const { theme } = useContext(ThemeContext);
  let activeColor = Colors[theme.mode];
  const { distance, cost, origin, destination } = params;

  return (
    <>
      <Stack.Screen options={{ headerTransparent: true, title: "" }} />
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          mapType="mutedStandard"
          pitchEnabled
          initialRegion={{
            latitude: 9.082,
            longitude: 8.6753,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
        />
      </View>
      <View
        style={[
          styles.infoContainer,
          { backgroundColor: activeColor.background },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={[styles.text, { color: activeColor.text }]}>
            {origin}
          </Text>
          <Text style={[styles.text, { color: activeColor.text }]}>
            {destination}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={[
              styles.textCard,
              {
                backgroundColor: activeColor.borderolor,
                color: activeColor.text,
              },
            ]}
          >
            {distance} km
          </Text>
          <Text
            style={[
              styles.textCard,
              {
                backgroundColor: activeColor.borderolor,
                color: activeColor.text,
              },
            ]}
          >
            ₦ {cost}
          </Text>
        </View>
      </View>
    </>
  );
};

export default orderMap;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 5,
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  textCard: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Thin",
  },
  map: {
    flex: 1,
  },
});
