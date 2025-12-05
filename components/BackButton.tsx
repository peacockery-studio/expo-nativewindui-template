import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export const BackButton = ({ onPress }: { onPress: () => void }) => (
  <View style={styles.backButton}>
    <Feather color="#007AFF" name="chevron-left" size={16} />
    <Text onPress={onPress} style={styles.backButtonText}>
      Back
    </Text>
  </View>
);
const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  backButtonText: {
    color: "#007AFF",
    marginLeft: 4,
  },
});
