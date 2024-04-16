import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return <View style={styles.header}>
        <View style={styles.logoContainer}>
            {/* <Image source={require('../../assets/cmd.png')} style={styles.logo} /> */}
        </View>
        <View style={styles.titleContainer}>
            <Text>Contacts</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        height: 50,
        marginLeft: 0,
        marginTop: 0,
        justifyContent: "center",
        alignItems: "space-around",
        alignContent:"center"
    },
    logoContainer:{
        alignSelf:"flex-start",
        top: 10,
        left: 15
    },
    titleContainer:{
        top: -20,
        right: 25
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 50
    }
})