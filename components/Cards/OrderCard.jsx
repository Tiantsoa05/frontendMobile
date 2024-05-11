import React from "react";
import { PanierStyles } from "../../assets/styles/styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text } from "react-native";
import { imagePath } from "../../imagePath";

export default function OrderCard({ item, onDelete }) {
    return (
        <View style={PanierStyles.cart}>
            <View style={PanierStyles.details}>
                <Text style={{color: ""}}>{item.libelle}</Text>
                <Text style={{}}>{item.nbre}</Text>
            </View>
            <View style={PanierStyles.decision}>
                <FontAwesome5Icon
                    name="window-close"
                    color={"red"}
                    size={22}
                    onPress={() => onDelete()}
                />
            </View>
        </View>
    )
}

