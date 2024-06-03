import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/context/themeContext";
import { Link } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const AccountLinkText = ({
  question,
  riderLabel,
  senderLabel,
  riderLink,
  senderLink,
  isLoginSreen = true,
}: {
  question: string;
  riderLink?: string;
  senderLink: string;
  senderLabel: string;
  riderLabel?: string;
  isLoginSreen: boolean;
}) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = Colors[theme.mode];
  return (
    <View style={{ flex: 1, marginBottom: 40 }}>
      <Text style={[styles.text, { color: activeColor.text }]}>
        {question}
        <Link href={senderLink} style={styles.linkText}>
          {senderLabel}
        </Link>
        {isLoginSreen && (
          <>
            {" "}
            or{" "}
            <Link href={riderLink!} style={styles.linkText}>
              {riderLabel}
            </Link>
          </>
        )}
      </Text>
    </View>
  );
};

export default AccountLinkText;

const styles = StyleSheet.create({
  linkText: {
    color: "#004e98",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
