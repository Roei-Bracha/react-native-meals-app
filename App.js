import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator'
export default function App() {
  const [fontLoaded , setFontLoaded] = useState(false)
  const fetchFonts = ()=> {
    return Font.loadAsync({
      'open-sens': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sens-bold':require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
    )
  }
  return (
    <MealsNavigator/>
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