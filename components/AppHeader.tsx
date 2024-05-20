import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomTextInput from "@/components/CustomTextInput";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

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

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <HeaderLeft link="/" iconName={"home"} />
      <CustomTextInput placeholder="Search" style={styles.textIput} />
      <HeaderLeft link="/" iconName={"bells"} />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  textIput: {
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 50,
    marginBottom: 10,
  },
});
