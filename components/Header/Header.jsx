import React from "react";
import { Image, Text, View } from "react-native";
import { HeaderStyles } from "../../assets/styles/styles";

export default function Header() {
    return (
        <View style={HeaderStyles.header}>
            <View style={HeaderStyles.logoContainer}>
                {/* <Image source={require('../../assets/cmd.png')} style={styles.logo} /> */}
            </View>
            <View style={HeaderStyles.titleContainer}>
                <Text>Contacts</Text>
            </View>
        </View>
    )
}