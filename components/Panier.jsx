import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Header from "./Header/Header";
import ConfirmButton from "./Buttons/ConfirmButton";
import CancelButton from "./Buttons/CancelButton";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function Panier({ panier }) {

    const [data, setData] = useState([
        {
            id: 1,
            libelle: "C'est de la merde monumentale cette application"
        },
        {
            id: 2,
            libelle: "Achat 2"
        },
        {
            id: 3,
            libelle: "Achat 3"
        }
    ])


    const deleteItem = function (item) {
        setData(data.filter(i => i.id !== item.id))
    }

    return <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Panier</Text>
        {
            data.length > 0 ?
                <ScrollView style={{ width: "100%", padding: 2 }}>
                    {
                        data.map(item => {
                            return <View key={item.id} style={styles.cart}>
                                <View style={styles.details}>
                                    <Text>{item.libelle}</Text>
                                </View>
                                <View style={styles.decision}>
                                    <FontAwesome5Icon name="window-close" color={"red"} size={22} onPress={() => deleteItem(item)} />
                                </View>
                            </View>
                        })
                    }
                </ScrollView> :
                <Text style={styles.info}>Panier vide</Text>
        }

        <View style={styles.buttons}>
            <ConfirmButton title="Valider le panier" />
            <CancelButton title="Vider le panier" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "red",
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10
    },
    buttons: {
        display: "flex",
        gap: 10,
        marginTop: 25
    },
    cart: {
        backgroundColor: "#F3EA55",
        borderRadius: 9,
        marginTop: 8,
        borderRadius: 12,
        padding: 15,
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    details: {
        alignSelf: "flex-start",
        alignContent: "center",
        top: 5,
        maxWidth: "80%"
    },
    decision: {
        alignSelf: "flex-end",
        top: -15,
        right: 8
    },
    info: {
        textAlign: "center",
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "rgba(5,10,200,0.5)",
        marginTop: 25,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 15,
        color: "white"
    }
})