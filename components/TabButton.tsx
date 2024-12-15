import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TabTriggerSlotProps } from "expo-router/ui";
import { ComponentProps, Ref, forwardRef } from "react";
import { Text, Pressable, View } from "react-native";

type Icon = ComponentProps<typeof FontAwesome>["name"];

export type TabButtonProps = TabTriggerSlotProps & {
  icon?: Icon;
};

export const TabButton = forwardRef(
  ({ icon, children, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        style={[
          {
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: 20,
            overflow: "hidden",
            gap: 5,
            padding: 10,
          },
          isFocused ? { backgroundColor: "#8068ff" } : undefined,
        ]}
      >
        <FontAwesome
          name={icon}
          size={24}
          color={isFocused ? "white" : "gray"}
        />
        <Text
          style={[
            { fontSize: 12, fontWeight: "bold", color: "gray" },
            isFocused ? { color: "white" } : undefined,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    );
  }
);
