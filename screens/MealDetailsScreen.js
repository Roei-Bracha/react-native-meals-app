import React from 'react'
import { View, Text, StyleSheet , Button, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = (props) => {
    return(
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId)
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}/>
            <View style={{...styles.mealDetail }}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}> Ingridians</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <ListItem key={step}>{step}</ListItem>
            ))}
            <Button title="Back" onPress={()=>{props.navigation.popToTop()}} />
        </ScrollView>
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
    image: {
        width: '100%',
        height:200
    },
    mealDetail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent:'space-around',
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize:22
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding:10
    }
})

export default MealDetailsScreen