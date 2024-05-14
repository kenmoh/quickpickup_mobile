import { Link } from "expo-router";
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
  riderLink: string;
  senderLink: string;
  senderLabel: string;
  riderLabel: string;
  isLoginSreen: boolean;
}) => {
  return (
    <View>
      <Text style={styles.text}>
        {question}
        <Link href={senderLink}>
          <Text style={styles.linkText}>{senderLabel}</Text>
        </Link>
        {isLoginSreen && (
          <>
            <Text> or </Text>
            <Link href={riderLink}>
              <Text style={styles.linkText}> {riderLabel}</Text>
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
    color: "#0000CD",
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: "grey",
  },
});
