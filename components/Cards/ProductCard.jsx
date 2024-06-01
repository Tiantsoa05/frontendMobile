import React, { useEffect, useState } from "react";
import { ListOptions, ListStyles } from "../../assets/styles/styles";
import { View, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/CartReducer";
import imagePath from "../../imagePath";
import ChooseButton from "../Buttons/ChooseButton";
import AbortButton from "../Buttons/AbortButton";
import { formater } from "../../functions/functions"
import { Swipeable } from "react-native-gesture-handler";
import CommandeModal from "../modals/CommandeModal";

export default function ProductCard({ item }) {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.cart)
    const actualItem = products.filter(i => i.libelle === item.libelle)


    const [cartModal, displayCartModal] = useState(false)

    const modal = () => {
        displayCartModal(true)
    }

    const rightOptions = ({ navigation }) => {
        return (
            <View style={ListOptions.container}>
                <ChooseButton
                    title={(actualItem.length > 0) ? actualItem[0].nbre : ""}
                    onPress={() => {
                        modal()
                    }}
                />
            </View >
        )
    }

    return (
        <Swipeable
            renderRightActions={rightOptions}
        >
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
                    <Text style={ListStyles.price}>Prix: {formater(item.prix)} Ar</Text>
                </View>
            </View>
            {
                cartModal &&
                <CommandeModal
                    item={item}
                    onDispatch={() => { dispatch(addToCart(item)) }}
                />
            }
        </Swipeable>
    )
}