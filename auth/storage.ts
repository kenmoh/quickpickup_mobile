import { ThemeModeType } from "@/context/themeContext";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";


const key = "authToken";
const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
     
      throw error
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode.jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
      
      throw error
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    throw error
  }
};

export const storeTheme = async (key: string, value: ThemeModeType) => {
  try {
    
    await SecureStore.setItemAsync(key, JSON.stringify(value))
    console.log(`Stored theme mode: ${value}`);
  } catch (error) {
    throw  error
  }
}
export const getTheme = async (key: string) => {
  try {
    const jsonValue = await SecureStore.getItemAsync(key);
    if (jsonValue != null) {
      const parsedValue = JSON.parse(jsonValue);
      console.log(`Retrieved theme mode: ${parsedValue}`);
      return parsedValue;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}



export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
};