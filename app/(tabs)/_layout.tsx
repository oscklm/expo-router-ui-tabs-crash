import React from "react";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";

import { TabButton } from "@/components/TabButton";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs style={[styles.tabBar, { paddingTop: insets.top }]}>
      <View style={styles.tabSlot}>
        <TabSlot />
      </View>
      <TabList style={styles.tabList}>
        <TabTrigger name="index" href="/" asChild>
          <TabButton icon="home">Home</TabButton>
        </TabTrigger>
        <TabTrigger name="explore" href="/explore" asChild>
          <TabButton icon="adjust">Explore</TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: "white",
  },
  tabSlot: {
    flex: 1,
    padding: 10,
  },
  tabList: {
    justifyContent: "space-evenly",
    marginBottom: 30,
    gap: 10,
    paddingHorizontal: 30,
  },
});
