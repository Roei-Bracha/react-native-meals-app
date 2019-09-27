import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoriteScreen'
import MealDetailScreen from '../screens/MealDetailsScreen'
import FiltesScreen from '../screens/FilterScreen'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import colors from '../constants/colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'

const defaultStackNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? "white": colors.primaryColor 
    }
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoriesMealsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? "white": colors.primaryColor 
        }
    },
    MealDetails:MealDetailScreen
}, defaultStackNavigationOptions)

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails:MealDetailScreen
},defaultStackNavigationOptions)

const FilterNavigator = createStackNavigator({
    Filters:FiltesScreen
},defaultStackNavigationOptions)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:colors.accentColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
}) : createBottomTabNavigator(
    tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: colors.accentColor
        }
});

const mainNavigator = createDrawerNavigator({
    MealsVav: MealsFavTabNavigator,
    Filters:FilterNavigator
})

export default createAppContainer(mainNavigator)