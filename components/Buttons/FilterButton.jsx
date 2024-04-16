import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

export default function FilterButton({ title, onPress , style}) {
    return <TouchableOpacity onPress={onPress}>
        <View style={style.container}>
            <Text style={style.text}>{title}</Text>
        </View>
    </TouchableOpacity>
}