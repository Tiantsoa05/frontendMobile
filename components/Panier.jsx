import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import Header from "./Header/Header";
import { PanierStyles } from "../assets/styles/styles";
import ConfirmButton from "./Buttons/ConfirmButton";
import CancelButton from "./Buttons/CancelButton";
import { useDispatch, useSelector } from "react-redux"
import { orderCart, reinitialise, removeFromCart } from "../store/CartReducer";
import OrderCard from "./Cards/OrderCard";

export default function Panier({ navigation }) {

    // get store initial state
    const { products } = useSelector(state => state.cart)
    const [commandes, setCommandes] = useState([])

    useEffect(() => {
        setCommandes(products)
    }, [])

    // initialiser les actions du store
    const dispacth = useDispatch()

    const deleteItem = function (item) {
        let acc = commandes
        setCommandes(acc.filter(com => com.libelle !== item.libelle))
        dispacth(removeFromCart(item))
    }

    const validCart = () => {
        dispacth(orderCart())
        navigation.navigate("Payement")
    }

    const EmptyCart = () => {
        dispacth(reinitialise())
        setCommandes([])
    }

    return <View style={PanierStyles.container}>
        <Header />
        <Text style={PanierStyles.title}>Panier</Text>
        {
            commandes.length > 0 ?
                <ScrollView style={{ width: "100%", padding: 2 }}>
                    {
                        commandes.map((item, index) => {
                            return (
                                <OrderCard
                                    key={index}
                                    item={item}
                                    onDelete={() => deleteItem(item)}
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
            <CancelButton
                title="Vider le panier"
                onPress={() => EmptyCart()}
            />
        </View>
    </View>
}