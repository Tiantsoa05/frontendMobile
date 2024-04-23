import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import ConfirmButton from "./Buttons/ConfirmButton";
import { useDispatch, useSelector } from "react-redux";
import { PayStyles } from "../assets/styles/styles";
import ConfirmedPayModal from "./modals/ConfirmedPayModal";
import { chooseCategory, payOrder, reinitialise } from "../store/CartReducer";


export default function Payement({navigation}) {

    const [nomClient, setNomClient] = useState('')
    const [addresse,setAddresse] = useState('')
    const [numCarte,setNumCarte] =useState('')
    const [payed,confirmPay] = useState(false)

    const {totalPrice} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const Pay = ()=>{
        dispatch(payOrder({id_client: 1, montant:totalPrice}))
        dispatch(reinitialise())
        setNomClient('')
        setAddresse('')
        setNumCarte('')
        confirmPay(true)
        navigation.navigate('Home')
    }

    return <View style={PayStyles.formContainer}>
        {
            payed && <ConfirmedPayModal onPress={()=>confirmPay(false)}/>
        }
        <Text style={PayStyles.title}>Paiement</Text>
        <Text style={PayStyles.valeur}>Net à payer : {totalPrice}</Text>
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
                onPress={()=>Pay()}
            />
        </View>
    </View>
}