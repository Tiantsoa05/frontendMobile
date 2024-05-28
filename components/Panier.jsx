import React from "react";
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

    // initialiser les actions du store
    const dispacth = useDispatch()

    const deleteItem = function (item) {
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
            products.length > 0 ?
                <ScrollView overScrollMode="never" style={{ width: "100%", padding: 2, maxHeight: 450 }}>
                    {
                        products.map((item, index) => {
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

        {
            products.length > 0 &&

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
        }
    </View>
}