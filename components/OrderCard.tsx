import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const OrderCard = ({ link }: { link: string }) => {
  return (
    <Link href={link} asChild>
      <TouchableOpacity>
        <View style={[styles.container]}>
          <View style={{ flex: 1 }}>
            <Image
              source="https://picsum.photos/seed/696/3000/2000"
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
                letterSpacing: 1,
              }}
            >
              Order Name
            </Text>
            <Text style={styles.textStyle}>Origin: Abijo</Text>
            <Text style={styles.textStyle}>Destination: Lekki</Text>
            <Text style={styles.textStyle}>Distance: 2 km</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text>₦ </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    fontFamily: "Poppins-Regular",
                    letterSpacing: 1,
                  }}
                >
                  4500
                </Text>
              </View>
              <Text style={styles.textStyle}>date here with dayjs</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#eee",
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
  wrapper: {
    gap: 15,
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "#aaa",
    fontFamily: "Poppins-Regular",
    letterSpacing: 1,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 10,
  },
});
