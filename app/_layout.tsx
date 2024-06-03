import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import FlashMessage from "react-native-flash-message";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeContext, ThemeModeType } from "@/context/themeContext";
import { getTheme, storeTheme } from "@/auth/storage";
import AuthProvider from "@/components/AuthProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

type ThemeMode = {
  mode: "dark" | "light";
};

export default function RootLayout() {
  const [theme, setTheme] = useState<ThemeMode>({ mode: "light" });

  const [loaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const toggleTheme = ({ newTheme }: { newTheme: { mode: ThemeModeType } }) => {
    let mode: ThemeModeType;
    if (newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode };
    }
    setTheme(newTheme);
    storeTheme("appTheme", newTheme.mode);
  };

  const getStoredTheme = async () => {
    try {
      const storedTheme = await getTheme("appTheme");
      if (storedTheme) {
        toggleTheme({ newTheme: storedTheme });
      }
    } catch (error) {
      throw error;
    } finally {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 1000);
    }
  };

  useEffect(() => {
    getStoredTheme();
  }, []);

  useEffect(() => {
    if (error) throw error;
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <AuthProvider>
            <Stack>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="(orderDetail)"
                options={{
                  headerShown: false,
                }}
              />
            </Stack>
          </AuthProvider>

          <FlashMessage position={"bottom"} />
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}
