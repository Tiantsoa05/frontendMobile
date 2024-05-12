import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function ChooseButton({ title, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.title}><FontAwesome5Icon name="cart" style={styles.icon} />{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 15
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