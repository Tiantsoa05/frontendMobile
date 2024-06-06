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

export default function CommandeModal({ item, onDispatch, close }) {

    const { products } = useSelector(state => state.cart)
    const actualItem = products.filter(i => i.libelle === item.libelle)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ left: 25 }}>
                    <TouchableOpacity
                        onPress={() => { close() }}
                    >
                        <FontAwesome5Icon name="arrow-left" size={25} color={"blue"} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 22, textAlign: "center", width: 400, left: -17, zIndex: -5 }}>{item.libelle}</Text>
                </View>
            </View>
            <Image
                source={
                    imagePath[item.libelle.split(' ').join("_").toLocaleLowerCase()]
                }
                style={{ width: 400, height: 350, resizeMode: "cover", top: 25 }}
            />
            <View style={styles.description}>
                <Text style={styles.descText}>{item.description}</Text>
                <Text style={styles.prix}>{formater(item.prix)} Ar</Text>
                <View style={styles.command}>
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
            <View style={styles.validButton}>
                <TouchableOpacity
                    onPress={}        
                >
                    <View>
                        <Text>Confirmer</Text>
                    </View>
                </TouchableOpacity>
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
    header: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        top: 90,
        alignItems: "center"
    },
    description: {
        top: 45,
        left: 0,
    },
    descText: {
        fontSize: 18,
        width: 400
    },
    prix: {
        fontSize: 18,
        fontWeight: "bold",
        top: 8
    },
    command: {
        top: 20,
    }
})