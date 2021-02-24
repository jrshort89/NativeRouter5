import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "./Details";
import React from "react";

export default function Nested() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab Deets" component={Details} />
    </Tab.Navigator>
  );
}
