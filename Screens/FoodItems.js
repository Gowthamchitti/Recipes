import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const FoodItems = ({ route }) => {
  const { data } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.border}>
        <Text style={styles.heading}>{data.name}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Ingredients to Prepare</Text>
        <Text></Text>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          {data.Ingredients[0]},{data.Ingredients[1]},{data.Ingredients[2]}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Instructions</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Rating</Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={24} color={"#FFD700"} />
          <Ionicons name="star" size={24} color={"#FFD700"} />
          <Ionicons name="star" size={24} color={"#FFD700"} />
          <Ionicons name="star" size={24} color={"#FFD700"} />
          <Ionicons name="star-outline" size={24} color={"#FFD700"} />
        </View>
      </View>
    </View>
  );
};
export default FoodItems;

const styles = StyleSheet.create({
  border: {
    height: "50%",
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
    borderBottomWidth: 1,
    color: "green",
    textAlign: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "500",
    alignSelf: "center",
    borderWidth: 2,
    color: "red",
    width: 300,
    textAlign: "center",
    marginTop: 10,
  },
  rating: {
    flexDirection: "row",
    gap: 5,
  },
});
