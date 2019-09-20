import React from 'react'
import { View, Text, StyleSheet , Button } from 'react-native';

const MealDeatailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> the meal details screen</Text>
            <Button title="Back" onPress={()=>{props.navigation.popToTop()}} />
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

export default MealDeatailsScreen