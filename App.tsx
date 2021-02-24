import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Button } from "react-native";
import Details from "./components/Details";
import Home from "./components/Home";
import LogoTitle from "./components/LogoTitle";
import ModalScreen from "./components/Modal";
import Nested from "./components/Nested";
import RootStack from "./components/RootStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ init: "initial param text test today" }}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ name: "using options name" }}
          options={({ route }) => ({
            title: route.params?.name,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          })}
        />
        <Stack.Screen name="Nested" component={Nested} />
        <Stack.Screen name="Root" component={RootStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
