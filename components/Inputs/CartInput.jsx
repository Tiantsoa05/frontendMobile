import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { PayStyles } from "../../assets/styles/styles";
import { useSelector } from "react-redux";

export default function CartInput({item,itemNumber}) {

    const [nombre, setNumber] = useState(0)
    const {products} = useSelector(state=>state.cart)

    return (
        <View>
            <TextInput 
                keyboardType="numeric" 
                onChange={(e) => setNumber(e)} 
                style={PayStyles.input}
                defaultValue={`${itemNumber}`}
            />
        </View>
    )
}