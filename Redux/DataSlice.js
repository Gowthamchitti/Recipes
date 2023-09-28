import { createSlice } from "@reduxjs/toolkit";
const Recipes = createSlice({
    name:"Recipes",
  initialState: {
    data: [
      { id: 1, name: "Food1", image: "",Ingredients:["leaves","Vegetables","etc..,"] },
      { id: 2, name: "Food2", image: "",Ingredients:["leaves","Vegetables","etc..,"]  },
      { id: 3, name: "Food3", image: "",Ingredients:["leaves","Vegetables","etc..,"]  },
      { id: 4, name: "Food4", image: "" ,Ingredients:["leaves","Vegetables","etc..,"] },
      { id: 5, name: "Food5", image: "" ,Ingredients:["leaves","Vegetables","etc..,"] },
      { id: 6, name: "Food6", image: "" ,Ingredients:["leaves","Vegetables","etc..,"] },
      { id: 7, name: "Food7", image: "" ,Ingredients:["leaves","Vegetables","etc..,"] },
      { id: 8, name: "Food8", image: "" ,Ingredients:["leaves","Vegetables","etc..,"] },
      { id: 9, name: "Food9", image: "" ,Ingredients:["leaves","Vegetables","etc..,"] },
    ],
  },
  reducers: {
    AddItem:(state,action)=>{
      state.data.push(action.payload.Items)
    }
  },
});
export const AddItem=Recipes.actions.AddItem
export default Recipes.reducer