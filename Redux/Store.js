import { configureStore } from "@reduxjs/toolkit";
import RecipesReducer from "./DataSlice";
const Store=configureStore({
    reducer:{
        Items:RecipesReducer
    }
})  
export default Store;