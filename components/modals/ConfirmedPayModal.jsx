import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

export default function ConfirmedPayModal({ onPress }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Payement confirmé</Text>
            </View>
            <View>
                <TouchableOpacity 
                    onPress={onPress}
                >
                    <Text style={styles.button}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        top:260,
        left: 50,
        flex: 1,
        backgroundColor: "white",
        height: "30%",
        width: "80%",
        justifyContent: 'center',
        alignContent: "center",
        borderRadius: 15,
        zIndex: 10
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        color: "green"
    },
    button: {
        textAlign:"center",
        top: 5
    }
})