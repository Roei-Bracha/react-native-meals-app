import { MEALS } from "../../data/dummy-data"

const intialMeals = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals:[]
}

const mealsReducer = (state = intialMeals, action) => {
    switch (action) {
        default:
            return state
    }
}

export default mealsReducer