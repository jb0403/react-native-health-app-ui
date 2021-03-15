import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Day({ dayname, active }) {
  return (
    <View style={styles.box1}>
      <View style={{ borderRadius: 10, padding: 5, backgroundColor: active }}>
        <Text style={{ color: "#fff" }}>{dayname}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
