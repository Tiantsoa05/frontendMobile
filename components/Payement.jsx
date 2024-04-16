import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ConfirmButton from "./Buttons/ConfirmButton";
import { useSelector } from "react-redux";


export default function Payement() {

    const [nomClient, setNomClient] = useState('')
    const [addresse,setAddresse] = useState('')
    const [numCarte,setNumCarte] =useState('')

    const prix = useSelector(state => state.totalPrice)

    return <View style={styles.formContainer}>
        <Text style={styles.title}>Paiement</Text>
        <Text style={styles.valeur}>Net à payer : 18.5$</Text>
        <View style={styles.inputs}>
            <Text style={styles.label}>Votre nom</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setNomClient(e)}
            />
            <Text style={styles.label}>Numero de carte crédit</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setNumCarte(e)}
            />
            <Text style={styles.label}>Adresse de livraison</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setAddresse(e)}
            />
        </View>
        <View style={styles.buttons}>
            <ConfirmButton title="Payer maintenant" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    valeur:{
        textAlign:"center",
        fontSize: 20,
        marginTop: 25,
        marginBottom: -38
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
        marginTop: 60
    },
    input: {
        borderWidth: 1,
        height: 45,
        borderRadius: 8,
        paddingLeft: 8,
        paddingRight: 8
    },
    buttons: {
        display: "flex",
        marginTop: 35,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
    button: {
        height: 35,
        width: 22
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 10,
        justifyContent: "center",
        backgroundColor:"white",
        height:"100%"
    },
    title: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 22,
        textTransform: "uppercase",
        color: "blue"
    },
    label:{
        fontSize: 16,
        marginBottom: -15
    }
})