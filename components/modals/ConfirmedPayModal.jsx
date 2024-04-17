import React from "react";
import { Button, Text, View } from "react-native";

export default function ConfirmedPayModal(onPress) {
    return (
        <View>
            <View>
                <Text>Payement confirmé</Text>
            </View>
            <View>
                <Button title="OK" onPress={onPress}/>
            </View>
        </View>
    )
}