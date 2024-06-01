import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import imagePath from "../../imagePath";
import { formater } from "../../functions/functions";
import { ListOptions } from "../../assets/styles/styles";
import { TouchableOpacity } from "react-native";
import CartInput from "../Inputs/CartInput";
import DynamicButton from "../Buttons/DynamicButton";

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";

export default function CommandeModal({ item, onDispatch }) {

    const { products } = useSelector(state => state.cart)
    const actualItem = products.filter(i => i.libelle === item.libelle)

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "space-around", flexDirection: "column" }}>
                <View>
                    <TouchableOpacity>
                        <FontAwesome5Icon name="arrow-left" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 22 }}>{item.libelle}</Text>
                </View>
            </View>
            <Image
                source={
                    imagePath[item.libelle.split(' ').join("_").toLocaleLowerCase()]
                }
                style={{ width: 400, height: 350, resizeMode: "cover" }}
            />
            <View style={{ top: 10 }}>
                <Text>{item.description}</Text>
                <Text>{formater(item.prix)}</Text>
                <View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },

})