import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoriteScreen'
import MealDetailScreen from '../screens/MealDetailsScreen'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import colors from '../constants/colors';


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
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? "white": colors.primaryColor 
    }
})

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }
    }
},{tabBarOptions:{activeTintColor:colors.accentColor}});

export default createAppContainer(MealsFavTabNavigator)