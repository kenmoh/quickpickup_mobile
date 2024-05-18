import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthNav = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.headerText}>Let's get you started</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btn, { elevation: 2 }]}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "black", elevation: 2 }]}
            onPress={() => router.push("/signup")}
          >
            <Text style={[styles.btntext, { color: "white" }]}>
              Sender Signup
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.btn, { backgroundColor: "blue", elevation: 2 }]}
            onPress={() => router.push("/signupDispatch")}
          >
            <Text style={[styles.btntext, { color: "white" }]}>
              Rider Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};

export default AuthNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // borderTopEndRadius: 15,
    // borderTopStartRadius: 15,
    // paddingHorizontal: 15,
  },
  btn: {
    width: "100%",
    padding: 12.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btntext: {
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
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
    margin: 25,
  },
});
