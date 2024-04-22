import React, { useState } from "react";
import ConfirmButton from "../Buttons/ConfirmButton";
import { ListStyles } from "../../assets/styles/styles";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/CartReducer";

export default function ProductCard({ item, image }) {

    const [numberProduct, setNumberProduct] = useState(0)
    const dispatch = useDispatch()

    const increment = () => {
        let acc = numberProduct + 1
        setNumberProduct(acc)
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
                <TouchableOpacity>
                    <ConfirmButton
                        title={"+" + (numberProduct > 0) && numberProduct}
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