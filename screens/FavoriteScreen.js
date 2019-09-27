import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

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

FavoritesScreen.navigationOptions= (navData)=> ({
  headerTitle: "your favorites",
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title={'Menu'} iconName={'ios-menu'} onPress={() => {navData.navigation.toggleDrawer() }}/>
  </HeaderButtons>
})

export default FavoritesScreen;
