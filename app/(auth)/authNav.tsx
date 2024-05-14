import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthNav = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}/>
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
    <TouchableOpacity style={styles.btn} onPress={()=>router.push('/signin')}>
     <Text style={styles.btntext}>Login</Text>
    </TouchableOpacity>
   
    <TouchableOpacity style={[styles.btn, {backgroundColor: 'black', }]} onPress={()=>router.push('/signup')}>
     <Text style={[styles.btntext, {color: 'white'}]}>Sender Signup</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.8} style={[styles.btn, {backgroundColor: 'tomato',}]} onPress={()=>router.push('/signupDispatch')}>
     <Text style={[styles.btntext, {color: 'white'}]}>Rider Signup</Text>
    </TouchableOpacity>
    </View>
<StatusBar style="inverted"/>
    </SafeAreaView>

  );
};

export default AuthNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000CD",
    flex: 1,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    paddingHorizontal: 15
  },
  btn: {
    width: '100%',
    padding: 12.5,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'white'
  },
  btntext:{
    textTransform:'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
  

  }
});
