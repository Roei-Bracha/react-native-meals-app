import { MEALS } from "../../data/dummy-data"
import { TOGGLE_FAVORITE } from "../actions/meals"

const intialMeals = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals:[]
}

const mealsReducer = (state = intialMeals, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);
            if (existingIndex >= 0) {
                updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(existingIndex)
                return ({
                    ...state,
                    favoriteMeals:updatedFavMeals
                })
            }
            else {
                const newFavMeals = [...state.favoriteMeals].concat(state.meals.find((meal) => meal.id === action.mealId))
                return({...state,favoriteMeals:newFavMeals})
            }
        default:
            return state
    }
}

export default mealsReducer