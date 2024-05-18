import { Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
  <SafeAreaView>
    <Link href='authNav' style={{margin: 50}}>
   <Text >Sign up screen</Text>
   </Link>
  </SafeAreaView>
  );
}

