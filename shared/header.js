import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcon } from "@expo/vector-icons";
import { styleSheets } from "min-document";

export default function Header() {
  return (
    <View style={styles.header}>
      {/* icon for the menu */}
      <View>
        <Text style={styles.headerText}>GameZone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006994",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    color: "white",
  },
});
