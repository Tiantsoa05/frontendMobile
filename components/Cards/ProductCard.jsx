import React, { useState } from "react";
import ConfirmButton from "../Buttons/ConfirmButton";
import { ListStyles } from "../../assets/styles/styles";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartReducer";
import { imagePath } from "../../imagePath";

export default function ProductCard({ item }) {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.cart)
    const actualItem = products.filter(i => i.libelle === item.libelle)
    const image = imagePath[item.libelle.split(' ').join("_").toLocaleLowerCase()]

    return (
        <View style={ListStyles.card}>
            <View style={ListStyles.imageContainer}>
                <Image
                    source={
                        image
                    }
                    style={{ position: "absolute", width: 5, height: 5, flex: 1, top: 0, left: 0 }}
                />
            </View>
            <View style={ListStyles.description}>
                <Text style={ListStyles.name}>{item.libelle}</Text>
                <Text style={ListStyles.price}>{item.prix}</Text>
                <TouchableOpacity>
                    <ConfirmButton
                        title={(actualItem.length > 0) ? actualItem[0].nbre : ""}
                        onPress={() => {
                            dispatch(addToCart(item))
                            increment()
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}