import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get("screen");
import { useNavigation } from "@react-navigation/native";
const Bottom = () => {
  const navigation = useNavigation();
  const Fooddata = useSelector((state) => state.Items.data);

  return (
    <View style={{ alignItems: "center", elevation: 10 }}>
      <FlatList
        data={Fooddata}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.navigate("FoodItems", { data: item })}
          >
            <Text style={{ fontWeight: "900", fontSize: 20 }}>{item.name}</Text>
            <Text>
              Rating:<Text style={{ color: "red", fontSize: 15 }}>4.3</Text>
            </Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default Bottom;
const styles = StyleSheet.create({
  items: {
    width: width / 2.5,
    height: height / 5,
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 2,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "lightgreen",
  },
});
