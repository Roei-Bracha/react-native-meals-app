import React , {useEffect, useCallback} from 'react'
import { View, Text, StyleSheet , Button, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { useSelector, useDispatch} from 'react-redux'
import { toggleFavorite } from '../store/actions/meals';

const ListItem = (props) => {
    return(
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailsScreen = props => {
    const availableMeals = useSelector((state) => state.meals.filteredMeals)
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = availableMeals.find((meal) => meal.id === mealId)
    const currentMealIsFavorite = useSelector((state) => state.meals.favoriteMeals.some(meal=>meal.id===mealId))
    const dispatch = useDispatch()
    // useEffect(() => {
    //     props.navigation.setParams({mealTitle:selectedMeal.title})
    // },[])

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])
    
    useEffect(() => {
        props.navigation.setParams({ toggleFav:toggleFavoriteHandler})
    }, [toggleFavoriteHandler])
    
    useEffect(() => {
        props.navigation.setParams({ isFavorite:currentMealIsFavorite})
    },[currentMealIsFavorite])
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
    const toggleFav = navigationData.navigation.getParam('toggleFav')
    const isFavorite = navigationData.navigation.getParam('isFavorite')
    return {
        // headerTitle: navigationData.navigation.getParam('mealTitle'),
        headerTitle:navigationData.navigation.getParam('mealTitle'),
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title={'favorite'} iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={()=>{toggleFav()}} />
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