import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";

const AuthNav = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.headerText}>Let's get you started</Text>

        <TouchableOpacity
          style={[
            styles.btn,
            { borderColor: Colors.primaryBtnColor, borderWidth: 2 },
          ]}
          onPress={() => router.push("/signin")}
        >
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: Colors.blackBtnColor, elevation: 2 },
          ]}
          onPress={() => router.push("/signup")}
        >
          <Text style={[styles.btntext, { color: Colors.primaryBtnColor }]}>
            Sender Signup
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.btn,
            { backgroundColor: Colors.primaryBtnColor, elevation: 2 },
          ]}
          onPress={() => router.push("/signupDispatch")}
        >
          <Text style={[styles.btntext, { color: "white" }]}>Rider Signup</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};

export default AuthNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    paddingHorizontal: 20,
  },
  btn: {
    width: "100%",
    padding: 12.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
  },
  btntext: {
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Poppins-SemiBold",
  },
  btnContainer: {
    backgroundColor: "#eee",
    width: "90%",
    paddingHorizontal: 25,
    paddingVertical: 35,
    gap: 25,
    borderRadius: 10,
  },

  headerText: {
    fontSize: 18,
    alignSelf: "flex-start",
    // margin: 25,
    fontFamily: "Poppins-SemiBold",
  },
});
