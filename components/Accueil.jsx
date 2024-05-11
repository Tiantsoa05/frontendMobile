import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "./Header/Header";
import { HomeStyles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import { imagePath } from "../imagePath";

export default function Accueil({ navigation }) {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()

    useEffect(function () {
        fetch("http://192.168.88.17:3000/api/categories/all")
            .then(response=>response.json())
            .then(response => { 
                console.log(Array.from(response.data)) 
                let array = Array.from(response.data)
                setCategories(array)
            })
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
                        categories.length > 0 ?
                            categories.map((categorie) => {
                                return (
                                    <TouchableOpacity
                                        key={categorie.id_categorie}
                                        onPress={() => selectCategory(categorie.Nom_categorie)}
                                    >
                                        <View style={HomeStyles.categorie}>
                                            <View style={HomeStyles.image}>
                                                <Image
                                                    source={imagePath[categorie.Nom_categorie.split(' ').join("_").toLocaleLowerCase()]}
                                                    style={HomeStyles.picture}
                                                />
                                            </View>
                                            <View style={HomeStyles.description}>
                                                <Text style={HomeStyles.desc}>{categorie.Nom_categorie}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }) :
                            <Text>Aucune catégorie</Text>
                    }
                </ScrollView>
            </View>
        </View>
    )
}