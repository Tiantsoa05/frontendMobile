import React from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import Header from "./Header/Header";
import { PanierStyles } from "../assets/styles/styles";
import ConfirmButton from "./Buttons/ConfirmButton";
import CancelButton from "./Buttons/CancelButton";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../store/CartReducer";

export default function Panier() {

    // get store initial state
    const data = useSelector(state => state.products)

    // initialiser les actions du store
    const dispacth = useDispatch()

    const deleteItem = function (item) {
        dispacth(removeFromCart(item.libelle))
    }

    return <View style={PanierStyles.container}>
        <Header />
        <Text style={PanierStyles.title}>Panier</Text>
        {
            data.length > 1 ?
                <ScrollView style={{ width: "100%", padding: 2 }}>
                    {
                        data.map(item => {
                            return (
                                <View key={item.id} style={PanierStyles.cart}>
                                    <View style={PanierStyles.details}>
                                        <Text>{item.libelle}</Text>
                                    </View>
                                    <View style={PanierStyles.decision}>
                                        <FontAwesome5Icon
                                            name="window-close"
                                            color={"red"}
                                            size={22}
                                            onPress={() => deleteItem(item)}
                                        />
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView> :
                <Text style={PanierStyles.info}>Panier vide</Text>
        }

        <View style={PanierStyles.buttons}>
            <ConfirmButton title="Valider le panier" />
            <CancelButton title="Vider le panier" />
        </View>
    </View>
}