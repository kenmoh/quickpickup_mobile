import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0000CD" }}>
      <View style={{ backgroundColor: "#0000CD", flex: 1 }} />

      <View style={styles.container}>
        <View style={styles.inputWrapper}>
        <Text style={styles.text}>
            Login | Sender
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    paddingHorizontal: 15,
  }, 
  inputWrapper: {
    backgroundColor: "white",
    flex: 1,
    top: -250,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    padding:20
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'gray'
  }
});
