import { LegendList } from "@legendapp/list";
import { useHeaderHeight } from "@react-navigation/elements";
import { Icon } from "@roninoss/icons";
import { cssInterop } from "nativewind";
import type * as React from "react";
import { Linking, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text } from "~/components/nativewindui/Text";
import { useColorScheme } from "~/lib/useColorScheme";
import { useHeaderSearchBar } from "~/lib/useHeaderSearchBar";

cssInterop(LegendList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

export default function Screen() {
  const searchValue = useHeaderSearchBar({
    hideWhenScrolling: COMPONENTS.length === 0,
  });

  const data = searchValue
    ? COMPONENTS.filter((c) =>
        c.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : COMPONENTS;

  return (
    <LegendList
      contentContainerClassName="py-4 android:pb-12"
      contentInsetAdjustmentBehavior="automatic"
      data={data}
      estimatedItemSize={200}
      extraData={searchValue}
      ItemSeparatorComponent={renderItemSeparator}
      keyboardShouldPersistTaps="handled"
      keyExtractor={keyExtractor}
      ListEmptyComponent={COMPONENTS.length === 0 ? ListEmptyComponent : null}
      recycleItems
      renderItem={renderItem}
    />
  );
}

function ListEmptyComponent() {
  const insets = useSafeAreaInsets();
  const dimensions = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const { colors } = useColorScheme();
  const height = dimensions.height - headerHeight - insets.bottom - insets.top;

  return (
    <View
      className="flex-1 items-center justify-center gap-1 px-12"
      style={{ height }}
    >
      <Icon color={colors.grey} name="file-plus-outline" size={42} />
      <Text className="pb-1 text-center font-semibold" variant="title3">
        No Components Installed
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
  );
}

type ComponentItem = { name: string; component: React.FC };

function keyExtractor(item: ComponentItem) {
  return item.name;
}

function renderItemSeparator() {
  return <View className="p-2" />;
}

function renderItem({ item }: { item: ComponentItem }) {
  return (
    <Card title={item.name}>
      <item.component />
    </Card>
  );
}

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <View className="px-4">
      <View className="gap-4 rounded-xl border border-border bg-card p-4 pb-6 shadow-black/10 shadow-sm dark:shadow-none">
        <Text className="text-center font-medium text-sm tracking-wider opacity-60">
          {title}
        </Text>
        {children}
      </View>
    </View>
  );
}

const COMPONENTS: ComponentItem[] = [
  {
    name: "Text",
    component() {
      return (
        <View className="gap-2">
          <Text className="text-center" variant="largeTitle">
            Large Title
          </Text>
          <Text className="text-center" variant="title1">
            Title 1
          </Text>
          <Text className="text-center" variant="title2">
            Title 2
          </Text>
          <Text className="text-center" variant="title3">
            Title 3
          </Text>
          <Text className="text-center" variant="heading">
            Heading
          </Text>
          <Text className="text-center" variant="body">
            Body
          </Text>
          <Text className="text-center" variant="callout">
            Callout
          </Text>
          <Text className="text-center" variant="subhead">
            Subhead
          </Text>
          <Text className="text-center" variant="footnote">
            Footnote
          </Text>
          <Text className="text-center" variant="caption1">
            Caption 1
          </Text>
          <Text className="text-center" variant="caption2">
            Caption 2
          </Text>
        </View>
      );
    },
  },
  {
    name: "Selectable Text",
    component() {
      return (
        <Text selectable uiTextView>
          Long press or double press this text
        </Text>
      );
    },
  },
];
