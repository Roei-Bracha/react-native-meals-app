import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import colors from '../constants/colors';

const CategoryMealScreen = props => {
    const selectedCategory  = props.navigation.getParam('category')
    return (
        <View style={styles.screen}>
            <Text> the categories Meal screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='go to details' onPress={() => {
                props.navigation.navigate({
                routeName:'MealDetails'
                })
            }} />
            <Button title="Back" onPress={()=>{props.navigation.goBack()}} />
        </View>
    )
}

CategoryMealScreen.navigationOptions = (navigationData)=> {
    return {
        headerTitle: navigationData.navigation.getParam('category').title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? "white": colors.primaryColor 
    }
}
const styles = StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        flex:1
    }
})

export default CategoryMealScreen