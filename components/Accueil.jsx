import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "./Header/Header";
import { HomeStyles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import path from 'path'

export default function Accueil({ navigation }) {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()

    useEffect(function () {
        fetch("http://192.168.56.1:3000/api/categories/all")
            .then(response => response.json()).then(data => { setCategories(data) })
            .catch(error => alert(error))
    }, [])

    const selectCategory = (categorie) => {
        dispatch(chooseCategory(categorie))
        navigation.navigate("Liste")
    }

    return (
        <View>
            <Header />

            <View style={HomeStyles.categories}>
                <ScrollView overScrollMode="never" style={HomeStyles.scrollContainer}>
                    {
                        categories.map((categorie) => {
                            return (
                                <TouchableOpacity
                                    key={categorie.id_categorie}
                                    onPress={() => selectCategory(categorie.Nom_categorie)}
                                >
                                    <View style={HomeStyles.categorie}>
                                        <View style={HomeStyles.image}>
                                            <Image
                                                // source={{ uri: `file://${path.join(__dirname, '../assets/images', `${categorie.Nom_categorie}.png`)}` }}
                                                // source={"images/"+categorie.Nom_categorie+".png"}
                                                source={require(path.join(__dirname,'../assets/images',[categorie.Nom_categorie,'png'].join('.')))}
                                                style={HomeStyles.picture}
                                            />
                                        </View>
                                        <View style={HomeStyles.description}>
                                            <Text style={HomeStyles.desc}>{categorie.Nom_categorie}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}