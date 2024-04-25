import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "./Header/Header";
import { HomeStyles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import imagePath from "../public/imagePath";
import { model } from "../config/config";

export default function Accueil({ navigation }) {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()

    useEffect(function () {
        model.get("/categories/all")
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
                                                source={imagePath[categorie.Nom_categorie.split(' ').join("_".toLocaleLowerCase())]}
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