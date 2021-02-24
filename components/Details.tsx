import React from "react";
import { Button } from "react-native";
import { Text, View, StyleSheet } from "react-native";

export default function Details({ route, navigation }) {
  const { some, count } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This is Detailed. So Detailed.</Text>
      <Text>{some}</Text>
      <Text>{count}</Text>
      <Button
        title="To Details Again..."
        onPress={() =>
          navigation.push("Details", {
            some: "some text for params and what not",
            count: count + 1,
          })
        }
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { alignItems: "center", justifyContent: "center", flex: 1 },
  text: { fontSize: 22, fontStyle: "italic", fontWeight: "900" },
});
