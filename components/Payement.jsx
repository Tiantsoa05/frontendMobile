import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import ConfirmButton from "./Buttons/ConfirmButton";
import { useDispatch, useSelector } from "react-redux";
import { PayStyles } from "../assets/styles/styles";
import ConfirmedPayModal from "./modals/ConfirmedPayModal";
import { payOrder, reinitialise } from "../store/CartReducer";
import { formater } from "../functions/functions";


export default function Payement({ navigation }) {

    const [nomClient, setNomClient] = useState('')
    const [addresse, setAddresse] = useState('')
    const [numCarte, setNumCarte] = useState('')
    const [payed, confirmPay] = useState(false)

    const [nameError, setNameError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [numCartError, setNumCartError] = useState(false)

    const { totalPrice } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const Pay = () => {
        dispatch(payOrder({ id_client: 1, montant: totalPrice }))
        dispatch(reinitialise())
        setNomClient('')
        setAddresse('')
        setNumCarte('')

        confirmPay(true)
    }

    const validPay = () => {
        confirmPay(false)
        navigation.navigate('Home')
    }

    const valid = (value, callback) => {
        if(value===""){
            callback()
        }
    }

    return <View style={PayStyles.formContainer}>
        {
            payed && <ConfirmedPayModal onPress={() => validPay()} />
        }
        <Text style={PayStyles.title}>Paiement</Text>
        <Text style={PayStyles.valeur}>Net à payer : {formater(totalPrice)}</Text>
        <View style={PayStyles.inputs}>
            <Text style={PayStyles.label}>Votre nom</Text>
            <TextInput
                onFocus={() => setNameError(false)}
                style={PayStyles.input}
                onChangeText={(e) => setNomClient(e)}
                onEndEditing={(e) => {
                    if(e===""){
                        
                    }
                }}
                required
            />
            {nameError && <Text style={PayStyles.label}>Vous devez remplir ce champ</Text>}
            <Text style={PayStyles.label}>Numero de carte crédit</Text>
            <TextInput
                style={PayStyles.input}
                onFocus={() => setNumCartError(false)}
                onEndEditing={(e) => valid(e, () => setNumCartError(true))}
                onChangeText={(e) => setNumCarte(e)}
                keyboardType="numeric"
                required
            />
            {numCartError && <Text style={PayStyles.label}>Vous devez remplir ce champ</Text>}
            <Text style={PayStyles.label}>Adresse de livraison</Text>
            <TextInput
                style={PayStyles.input}
                onFocus={() => setAddressError(false)}
                onEndEditing={(e) => valid(e, () => setAddressError(true))}
                onChangeText={(e) => setAddresse(e)}
            />
            {addressError && <Text style={PayStyles.label}>Vous devez remplir ce champ</Text>}
        </View>
        <View style={PayStyles.buttons}>
            <ConfirmButton
                title="Payer maintenant"
                onPress={() => Pay()}
            />
        </View>
    </View>
}