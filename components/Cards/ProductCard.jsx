import React from "react";
import { ListStyles } from "../../assets/styles/styles";
import { View, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/CartReducer";
import imagePath from "../../imagePath";
import ChooseButton from "../Buttons/ChooseButton";
import AbortButton from "../Buttons/AbortButton";

export default function ProductCard({ item }) {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.cart)
    const actualItem = products.filter(i => i.libelle === item.libelle)

    return (
        <View style={ListStyles.card}>
            <View style={ListStyles.imageContainer}>
                <Image
                    source={
                        imagePath[item.libelle.split(' ').join("_").toLocaleLowerCase()]
                    }
                    style={{ width: 150, height: 170, resizeMode: "cover" }}
                />
            </View>
            <View style={ListStyles.description}>
                <Text style={ListStyles.name}>{item.libelle}</Text>
                <Text style={ListStyles.desc}>{item.description}</Text>
                <Text style={ListStyles.price}>Prix: {item.prix} Ar</Text>
                <View style={ListStyles.buttons}>
                    <ChooseButton
                        title={(actualItem.length > 0) ? actualItem[0].nbre : ""}
                        onPress={() => {
                            dispatch(addToCart(item))
                            // increment()
                        }}
                    />
                    <AbortButton
                        onPress={()=>{
                            dispatch(removeFromCart(item))
                        }}
                    />
                </View>
            </View>
        </View>
    )
}