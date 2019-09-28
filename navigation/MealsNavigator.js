import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { Platform , Text} from 'react-native'
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
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily:'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily:'open-sans'
    },
        headerTintColor: Platform.OS === 'android' ? "white": colors.primaryColor 
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
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
})

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails:MealDetailScreen
}, { defaultNavigationOptions: defaultStackNavigationOptions })

const FilterNavigator = createStackNavigator({
    Filters:FiltesScreen
}, {

    defaultNavigationOptions: defaultStackNavigationOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: colors.primaryColor,
            tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily:'open-sans-bold'}}>meals</Text> : 'meals'
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: colors.accentColor,
            tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily:'open-sans-bold'}}>favorites!</Text> : 'favorites'
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
}) : createBottomTabNavigator(
    tabScreenConfig, {
        tabBarOptions: {
            labelStyle:{fontFamily:'open-sans'},
            activeTintColor: colors.accentColor
        }
});

const mainNavigator = createDrawerNavigator({
    MealsVav: {
        screen: MealsFavTabNavigator, navigationOptions: {
            drawerLabel: 'Meals',
    }},
    Filters:FilterNavigator
}, {
        contentOptions: {
        activeTintColor: colors.accentColor,
        labelStyle: {
            fontFamily:'open-sans-bold'
        }
    }
})

export default createAppContainer(mainNavigator)