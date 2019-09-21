import React from 'react'
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate( {routeName:'CategoryMeals', params:{ category :itemData.item}} )
            }}
            style={styles.gridItem}>
                <View>
                    <Text>{itemData.item.title} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} keyExtractor={item => item.id}/>
        </View>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: "Meals Categories",
    
}
const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height:150,
    },
})

export default CategoriesScreen