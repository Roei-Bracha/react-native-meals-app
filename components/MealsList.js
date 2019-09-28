import React from 'react';
import {View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem'
import { useSelector} from 'react-redux'

const MealsList = props => {
    const favoriteMeals = useSelector((state)=>state.meals.favoriteMeals)
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => { props.navigation.navigate('MealDetails', { mealId: itemData.item.id, mealTitle:itemData.item.title, isFavorite:favoriteMeals.some(meal=>meal.id===itemData.item.id) }) }}
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
      }
})

export default MealsList