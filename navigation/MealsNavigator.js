import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen'
import { createAppContainer } from 'react-navigation';
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
}})

export default createAppContainer(MealsNavigator)