import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data';
const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal=>meal.id=='m1' || meal.id=='m2')
  return (
    <MealsList listData={favMeals} navigation={props.navigation}/>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

FavoritesScreen.navigationOptions = {
  headerTitle:"your favorites"
}

export default FavoritesScreen;
