import { Text, StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import Divider from "@/components/Divider";
import CustomTextInput from "@/components/CustomTextInput";
import CustomBtn from "@/components/CustomBtn";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, justifyContent: "center" }}
    >
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              marginVertical: 25,
              textTransform: "uppercase",
              fontSize: 16,
              fontWeight: "bold",
              color: "gray",
            }}
          >
            Send Order
          </Text>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Entypo name="location-pin" size={30} color="gray" />
              <Divider />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <Text style={styles.text}>Location</Text>
              <CustomTextInput label="Pickup Location" hasBorder />
              <CustomTextInput label="Destination" hasBorder />
              <CustomTextInput label="Distance" hasBorder editable={false} />
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Feather name="box" size={30} color="gray" />
              <Divider />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <Text style={styles.text}>Order Details</Text>
              <CustomTextInput label="Name" hasBorder />
              <CustomTextInput
                label="Description"
                hasBorder
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
              <CustomTextInput label="Image" hasBorder />
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
        <CustomBtn
          label="submit"
          btnBorderRadius={10}
          btnColor="#0000CD"
          onPress={() => {}}
        />
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
  },
});
