import React from "react";
import { View, Text } from "react-native";
import Nested from "./Nested";

export default function NestHouse() {
  return (
    <View>
      <Text>Some text so there is something else.</Text>
      <Nested />
    </View>
  );
}
