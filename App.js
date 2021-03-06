import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator'
import { useScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import mealsReducer from './store/reducers/meals'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

useScreens()

const rootReducers = combineReducers({
  meals:mealsReducer
})

const store = process.env.NODE_ENV !== 'production' ? createStore(rootReducers, composeWithDevTools()) : createStore(rootReducers)

export default function App() {
  const [fontLoaded , setFontLoaded] = useState(false)
  const fetchFonts = ()=> {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
    )
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
