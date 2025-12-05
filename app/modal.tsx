import { Icon } from "@roninoss/icons";
import { StatusBar } from "expo-status-bar";
import { Linking, Platform, View } from "react-native";

import { Text } from "~/components/nativewindui/Text";
import { useColorScheme } from "~/lib/useColorScheme";

export default function ModalScreen() {
  const { colors, colorScheme } = useColorScheme();

  const getStatusBarStyle = () => {
    if (Platform.OS === "ios") {
      return "light";
    }
    return colorScheme === "dark" ? "light" : "dark";
  };

  return (
    <>
      <StatusBar style={getStatusBarStyle()} />
      <View className="flex-1 items-center justify-center gap-1 px-12">
        <Icon color={colors.grey} name="file-plus-outline" size={42} />
        <Text className="pb-1 text-center font-semibold" variant="title3">
          NativeWindUI
        </Text>
        <Text className="pb-4 text-center" color="tertiary" variant="subhead">
          You can install any of the free components from the{" "}
          <Text
            className="text-primary"
            onPress={() => Linking.openURL("https://nativewindui.com")}
            variant="subhead"
          >
            NativeWindUI
          </Text>
          {" website."}
        </Text>
      </View>
    </>
  );
}
