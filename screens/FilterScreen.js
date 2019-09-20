import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> the Filter screen</Text>
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

export default FilterScreen