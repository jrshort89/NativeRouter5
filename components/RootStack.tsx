import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Modal from "./Modal";
import RootHome from "./RootHome";

export default function RootStack({ navigation }) {
  const RootStack = createStackNavigator();
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="RootHome" component={RootHome} />
      <RootStack.Screen name="MyModal" component={Modal} />
    </RootStack.Navigator>
  );
}
