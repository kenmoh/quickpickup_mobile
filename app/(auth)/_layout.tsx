import {Stack} from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{
      animation: 'slide_from_bottom'
    }}>
        <Stack.Screen name='signin' options={{
          headerShown: false
        }}/>
         <Stack.Screen name='signup' options={{
          headerShown: false
         }}/>
         <Stack.Screen name='landing' options={{
          headerShown: false
         }}/>
          <Stack.Screen name='signupDispatch' options={{
          headerShown: false
         }}/>
    </Stack>
  )
}

export default AuthLayout