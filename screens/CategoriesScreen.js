import React from 'react'
import { View, Text, StyleSheet,Button } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> the categories screen</Text>
            <Button title='go to meals' onPress={() => {
                props.navigation.navigate({
                routeName:'CategoryMeals'
                })
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        flex:1
    }
})

export default CategoriesScreen