import React from 'react';
import { useSelector } from 'react-redux'
import { CATEGORIES} from '../data/dummy-data';
import MealsList from '../components/MealsList';

const CategoryMealScreen = props => {
  const availableMeals = useSelector((state)=>state.meals.filteredMeals)
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <MealsList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealScreen;
