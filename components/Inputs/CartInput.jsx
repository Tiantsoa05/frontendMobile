import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { PayStyles } from "../../assets/styles/styles";
import { useSelector } from "react-redux";

export default function CartInput({item}) {

    const [nombre, setNumber] = useState(0)
    const {products} = useSelector(state=>state.cart)
    const actualItem = products.filter(i => i.libelle === item.libelle)

    return (
        <View>
            <TextInput 
                keyboardType="numeric" 
                onChange={(e) => setNumber(e)} 
                style={PayStyles.input}
                defaultValue={`${actualItem.length}`}
            />
        </View>
    )
}