import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "./Header/Header";
import { HomeStyles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import imagePath from "../imagePath";
import CategoryCard from "./Cards/CategoryCard";

export default function Accueil({ navigation }) {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()

    useEffect(function () {
        fetch("http://192.168.88.10:3000/api/categories/all")
            .then(response => response.json())
            .then(response => {
                setCategories(response)
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
                <ScrollView overScrollMode="never" contentContainerStyle={HomeStyles.scrollContainer} horizontal>
                    {
                        categories.length > 0 ?
                            categories.map((categorie) => {
                                return (
                                    <CategoryCard
                                        key={categorie.id_categorie}
                                        categorie={categorie}
                                        selectCategory={selectCategory}
                                    />
                                )
                            }) :
                            <Text>Aucune catégorie</Text>
                    }
                </ScrollView>
            </View>
        </View>
    )
}