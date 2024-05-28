import React from "react";
import { View, Image, Text, } from "react-native";
import imagePath from "../../imagePath";
import { formater } from "../../functions/functions";

export default function CommandeModal({ item }) {
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
        </View>
    )
}