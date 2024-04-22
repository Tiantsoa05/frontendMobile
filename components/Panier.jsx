import React from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import Header from "./Header/Header";
import { PanierStyles } from "../assets/styles/styles";
import ConfirmButton from "./Buttons/ConfirmButton";
import CancelButton from "./Buttons/CancelButton";
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../store/CartReducer";
import OrderCard from "./Cards/OrderCard";

export default function Panier({ navigation }) {

    // get store initial state
    const { products } = useSelector(state => state.cart)

    // initialiser les actions du store
    const dispacth = useDispatch()

    const deleteItem = function (item) {
        dispacth(removeFromCart(item.libelle))
    }

    const validCart = () => {
        navigation.navigate("Payement")
    }

    return <View style={PanierStyles.container}>
        <Header />
        <Text style={PanierStyles.title}>Panier</Text>
        {
            products.length > 0 ?
                <ScrollView style={{ width: "100%", padding: 2 }}>
                    {
                        products.map((item,index) => {
                            return (
                                <OrderCard
                                    key={index}
                                    item={item}
                                    onDelete={deleteItem}
                                />
                            )
                        })
                    }
                </ScrollView> :
                <Text style={PanierStyles.info}>Panier vide</Text>
        }

        <View style={PanierStyles.buttons}>
            <ConfirmButton
                title="Valider le panier"
                onPress={() => validCart()}
            />
            <CancelButton title="Vider le panier" />
        </View>
    </View>
}