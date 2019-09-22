import React from 'react'
import { View, Text, StyleSheet , Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId)
    return (
        <View style={styles.screen}>
            <Text> the meal details screen</Text>
            <Text>{selectedMeal.title}</Text>
            <Button title="Back" onPress={()=>{props.navigation.popToTop()}} />
        </View>
    )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
    const selectedMeal = MEALS.find((meal)=>meal.id === navigationData.navigation.getParam('mealId'))
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title={'favorite'} iconName={'ios-star'} onPress={()=>{}} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        flex:1
    }
})

export default MealDetailsScreen