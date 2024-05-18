import {
  Text,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "@/components/Divider";
import DetailLabel from "@/components/DetailLabel";
import Status from "@/components/Status";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, justifyContent: "center" }}
    >
      <View style={[styles.mainContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              marginTop: 25,
              marginBottom: 10,
              textTransform: "uppercase",
              fontSize: 16,
              fontWeight: "bold",
              color: "gray",
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
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 16,
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Status:
            </Text>
            <Status
              text="Pending"
              backgroundColor="red"
              pillWidth={90}
              pVertical={5}
              pHorizontal={6}
              textColor="white"
            />
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <AntDesign name="user" size={30} color="gray" />
              <Divider />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <Text style={styles.text}>Sender Details</Text>
              <View>
                <DetailLabel lable="Name" value={"Kenneth"} />
                <DetailLabel lable="Phone" value={"08088554455"} />
                <DetailLabel lable="Location" value={"Lagos"} />
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Feather name="box" size={30} color="gray" />
              <Divider />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <Text style={styles.text}>Order Details</Text>
              <View>
                <DetailLabel lable="Name" value="Gucci" />
                <DetailLabel lable="Origin" value="Lakowe" />
                <DetailLabel lable="Destination" value="Abijo" />
                <DetailLabel lable="Distance" value={"4.5 km"} />
                <DetailLabel lable="Total Cost" value={"₦ 1800"} />
                <DetailLabel lable="Commission" value={"₦ 350"} />
                <DetailLabel lable="Amount payable" value={"₦ 1450"} />
                <View style={{ marginVertical: 10 }}>
                  <Text
                    style={{ fontSize: 16, color: "grey", marginBottom: 5 }}
                  >
                    Description:
                  </Text>
                  <Text style={{ fontSize: 16, color: "grey" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque consectetur reprehenderit cum impedit amet.
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
              <Text style={styles.text}>Rider Details</Text>
              <DetailLabel lable="Rider Name" value="John Doe" />
              <DetailLabel lable="Phone Number" value="080447766998" />
              <DetailLabel lable="Company Name" value={"XYZ"} />
              <DetailLabel lable="Company Phone" value={"1800587944"} />
            </View>
          </View>
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "gray",
    marginVertical: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
