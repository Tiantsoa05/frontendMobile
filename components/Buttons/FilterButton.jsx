import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

export default function FilterButton({ title, onPress, style }) {
    return <TouchableOpacity
        onPress={onPress}
        style={styles.touchable}
    >
        <View style={style.container}>
            <Text style={style.text}>{title}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    touchable:{
        height: 85,
        marginLeft: 15
    }
})