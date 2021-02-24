import React from "react";
import { View, Button } from "react-native";

export default function RootHome({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Open Modal"
      />
    </View>
  );
}
