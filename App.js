import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import Store from './Redux/Store';
import FoodItems from './Screens/FoodItems';
import Additem from './Screens/Top/Bottom/Additem';
const Stack=createNativeStackNavigator()
export default function App() {

  return (
    <Provider store={Store}>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Food Magic" component={Home}/>
      <Stack.Screen name="FoodItems" component={FoodItems}/>
      <Stack.Screen name="Additem" component={Additem}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
