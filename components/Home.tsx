import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Home({ route, navigation }) {
  const { init } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This is home screen. Such wow.</Text>
      <Text>{init}</Text>
      <Button
        title="To Details"
        onPress={() =>
          navigation.navigate("Details", {
            some: "some text for params and what not",
            count: 0,
          })
        }
      />
      <Button
        title="Root Stack"
        onPress={() => {
          navigation.navigate("Root");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { alignItems: "center", justifyContent: "center", flex: 1 },
  text: { fontSize: 22, fontStyle: "italic", fontWeight: "900" },
});
