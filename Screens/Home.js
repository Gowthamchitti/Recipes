import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React from "react";
import Top from "./Top";
import Bottom from "./Top/Bottom/Bottom";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("screen");
const Home = () => {
  const navigation = useNavigation();
  function Additem() {
    navigation.navigate("Additem");
  }
  return (
    <View style={{ flex: 1, backgroundColor: "orange" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("FoodItems", {
            data: {
              id: 900,
              name: "Featured Receipe",
              image: "",
              Ingredients: ["leaves", "Vegetables", "etc..,"],
            },
          })
        }
        style={{
          height: height / 2,
          width: width,
          borderWidth: 1,
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "lightyellow",
        }}
      >
        <Top />
      </TouchableOpacity>
      <View style={{ height: height / 2, width: width, flex: 2 }}>
        <Bottom />
      </View>
      <View style={{ width: 120, marginLeft: "auto" }}>
        <Button title="Add Item" onPress={Additem} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
