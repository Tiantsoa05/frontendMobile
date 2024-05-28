import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function DynamicButton({ children, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.title}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        padding: 8,
        borderRadius: 9,
        width: 80,
        height: 55,
        textAlign: "center",
        paddingTop: 17
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