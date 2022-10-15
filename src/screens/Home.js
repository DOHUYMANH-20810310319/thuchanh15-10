import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FetchAPI from "../API/FetchAPI.js";

export default function Home() {
  return (
    <View style={styles.main}>
          <FetchAPI/>
      </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width:266,
    height:266,
  }
});
