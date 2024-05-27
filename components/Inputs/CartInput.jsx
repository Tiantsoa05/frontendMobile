import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { PayStyles } from "../../assets/styles/styles";

export default function CartInput({value}) {
    const [nombre, setNumber] = useState(0)
    return (
        <View>
            <TextInput 
                keyboardType="numeric" 
                onChange={(e) => setNumber(e)} 
                style={PayStyles.input}
                defaultValue={`${value}`}
            />
        </View>
    )
}