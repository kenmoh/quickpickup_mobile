import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpDispatch = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0000CD" }}>
      <View style={{ backgroundColor: "#0000CD", flex: 1 }} />

      <View style={styles.container}>
        <View style={styles.inputWrapper}>
        <Text style={styles.text}>
            Sign Up | Dispatch
          </Text>
          <TextInput placeholder="Email" style={{paddingVertical: 10, fontSize:15, paddingHorizontal: 10, backgroundColor: '#eee', width:'100%', borderRadius: 5, color: 'gray', marginVertical:5}}/>

          <TextInput placeholder="Company Name" style={{paddingVertical: 10, fontSize:15, paddingHorizontal: 10, backgroundColor: '#eee', width:'100%', borderRadius: 5, color: 'gray', marginVertical:5}}/>

          <TextInput placeholder="Company Reg. Number" style={{paddingVertical: 10, fontSize:15, paddingHorizontal: 10, backgroundColor: '#eee', width:'100%', borderRadius: 5, color: 'gray', marginVertical:5}}/>

          <TextInput placeholder="Password" style={{paddingVertical: 10, fontSize:15, paddingHorizontal: 10, backgroundColor: '#eee', width:'100%', borderRadius: 5, color: 'gray', marginVertical:5}}/>
          <TextInput placeholder="Password" style={{paddingVertical: 10, fontSize:15, paddingHorizontal: 10, backgroundColor: '#eee', width:'100%', borderRadius: 5, color: 'gray', marginVertical:5}}/>

          <TextInput placeholder="Password" style={{paddingVertical: 10, fontSize:15, paddingHorizontal: 10, backgroundColor: '#eee', width:'100%', borderRadius: 5, color: 'gray', marginVertical:5}}/>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpDispatch;

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
    height: 800,
    top: -180,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    padding:20,
    
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'gray',
    marginBottom: 10
  }
});
