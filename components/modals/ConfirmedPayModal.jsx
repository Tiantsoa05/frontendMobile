import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function ConfirmedPayModal({ onPress }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}><FontAwesome5Icon name="check" style={{fontSize: 20}}/>  Payement réussi</Text>
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
        position: "absolute",
        top: 260,
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
        textAlign: "center",
        top: 35,
        backgroundColor: '#88B4F6',
        padding: 15,
        fontSize: 17,
        fontWeight: "bold",
        textTransform: "uppercase",
        width : 100,
        marginLeft: 105,
        borderRadius: 12,
        color:"white"
    }
})