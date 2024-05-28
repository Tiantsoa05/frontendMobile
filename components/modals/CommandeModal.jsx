import React from "react";
import { View, Image, Text, } from "react-native";
import imagePath from "../../imagePath";
import { formater } from "../../functions/functions";
import { ListOptions } from "../../assets/styles/styles";
import CartInput from "../Inputs/CartInput";
import DynamicButton from "../Buttons/DynamicButton";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";

export default function CommandeModal({ item, onDispatch }) {

    const { products } = useSelector(state => state.cart)
    const actualItem = products.filter(i => i.libelle === item.libelle)

    return (
        <View>
            <Image
                source={
                    imagePath[item.libelle.split(' ').join("_").toLocaleLowerCase()]
                }
                style={{ width: 300, height: 250, resizeMode: "cover" }}
                blurRadius={2}
            />
            <Text>{item.libelle}</Text>
            <Text>{item.description}</Text>
            <Text>{formater(item.prix)}</Text>
            <View style={ListOptions.container}>
                <DynamicButton
                    onPress={onDispatch}
                >
                    <FontAwesome5Icon name="plus" />
                </DynamicButton>
                <CartInput item={item} itemNumber={actualItem.length} />
                <DynamicButton>
                    <FontAwesome5Icon name="minus" />
                </DynamicButton>
            </View>
        </View>
    )
}