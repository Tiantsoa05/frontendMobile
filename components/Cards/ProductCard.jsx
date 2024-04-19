import React, { useState } from "react";
import ConfirmButton from "../Buttons/ConfirmButton";
import { ListStyles } from "../../assets/styles/styles";
import { View, TouchableOpacity, Image, Text } from "react-native";

export default function ProductCard({ item, image }) {

    const [numberProduct, setNumberProduct] = useState(0)

    const increment = () => {
        let actual = numberProduct
        setNumberProduct(actual + 1)
    }

    return (
        <View style={ListStyles.card}>
            <View style={ListStyles.imageContainer}>
                <Image
                    source={
                        { uri: image }
                    }
                    style={ListStyles.image}
                />
            </View>
            <View style={ListStyles.description}>
                <Text style={ListStyles.name}>{item.libelle}</Text>
                <Text style={ListStyles.price}>{item.prix}</Text>
                <TouchableOpacity onPress={() => {
                    dispatch(addToCart(item))
                    increment()
                }}>
                    <ConfirmButton
                        title={"+" + (numberProduct !== 0) && numberProduct}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}