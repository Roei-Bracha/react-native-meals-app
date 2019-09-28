import React from 'react';
import { View, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import { useSelector} from 'react-redux'
import DefaultText from '../components/DefaultText';
const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
  
  if (favMeals.length === 0 | !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText> no favorite meals found. Start adding Some</DefaultText>
      </View>
    )
  }

  return (
    <MealsList listData={favMeals} navigation={props.navigation}/>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

FavoritesScreen.navigationOptions= (navData)=> ({
  headerTitle: "your favorites",
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title={'Menu'} iconName={'ios-menu'} onPress={() => {navData.navigation.toggleDrawer() }}/>
  </HeaderButtons>
})

export default FavoritesScreen;
