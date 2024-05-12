import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function AbortButton({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.title}><FontAwesome5Icon name="stop" style={styles.icon}/></Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 8,
        borderRadius: 9,
        width: 80,
        height: 75
    },
    title: {
        display: "flex",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    icon: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
})