import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import ConfirmButton from "./Buttons/ConfirmButton";
import { useSelector } from "react-redux";
import { PayStyles } from "../assets/styles/styles";


export default function Payement() {

    const [nomClient, setNomClient] = useState('')
    const [addresse,setAddresse] = useState('')
    const [numCarte,setNumCarte] =useState('')

    const prix = useSelector(state => state.totalPrice)

    return <View style={PayStyles.formContainer}>
        <Text style={PayStyles.title}>Paiement</Text>
        <Text style={PayStyles.valeur}>Net à payer : {prix}</Text>
        <View style={PayStyles.inputs}>
            <Text style={PayStyles.label}>Votre nom</Text>
            <TextInput
                style={PayStyles.input}
                onChangeText={(e) => setNomClient(e)}
            />
            <Text style={PayStyles.label}>Numero de carte crédit</Text>
            <TextInput
                style={PayStyles.input}
                onChangeText={(e) => setNumCarte(e)}
            />
            <Text style={PayStyles.label}>Adresse de livraison</Text>
            <TextInput
                style={PayStyles.input}
                onChangeText={(e) => setAddresse(e)}
            />
        </View>
        <View style={PayStyles.buttons}>
            <ConfirmButton 
                title="Payer maintenant" 
                onPress={()=>alert("Payement réussie")}
            />
        </View>
    </View>
}