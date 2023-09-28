import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AddItem } from "../../../Redux/DataSlice";
const Additem = () => {
  const [ItemName, setItemName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [Item1, setItem1] = useState("");
  const [Item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();
  function Save() {
    if (ItemName === "") {
      alert("Please enter all items");
    } else {
      const obj = {
        name: ItemName,
        instruction: instruction,
        id: new Date().toString() + Math.random().toString(),
        Ingredients: [Item1, Item2, item3],
      };
      dispatch(AddItem({ Items: obj }));
      navigation.goBack();
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "600", fontSize: 30 }}>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={setItemName}
      />
      <Text style={{ fontWeight: "600", fontSize: 30 }}>Instructions</Text>
      <View>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={10}
          onChangeText={setInstruction}
        />
      </View>
      <Text style={{ fontWeight: "600", fontSize: 30 }}>Ingredients</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Item 1"
          onChangeText={setItem1}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Item 2"
          onChangeText={setItem2}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Item3 3"
          onChangeText={setItem3}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save" onPress={Save} />
      </View>
    </View>
  );
};

export default Additem;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    backgroundColor: "#ccc",
    marginVertical: 16,
    padding: 8,
    backgroundColor: "lightyellow",
    borderRadius: 20,
    elevation: 20,
  },
  container: {
    margin: 16,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    elevation: 20,
  },
});
