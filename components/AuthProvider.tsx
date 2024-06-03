import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useState } from "react";
import { AuthContext, useProtectedRoute } from "@/auth/authContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{} | null>(null);
  const signIn = () => {
    // Implement signIn logic
  };

  const signOut = () => {
    setUser(null);
  };
  useProtectedRoute(user);
  return (
    <AuthContext.Provider value={{ signIn, signOut, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
