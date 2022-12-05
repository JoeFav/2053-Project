import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfRecipes from './ListOfRecipes';
import RecipeDescription from './RecipeDetail';

export default function App() {
  return (
    //Use the NavigationContainer and the Stack to display your app
    //FlatListOfRecipes is just here as a place holder.
    <ListOfRecipes />
  );
}

