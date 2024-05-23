import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import Header from "./Header/Header";
import { HomeStyles, mainStyles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import CategoryCard from "./Cards/CategoryCard";

export default function Accueil({ navigation }) {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()

    useEffect(function () {
        fetch("http://192.168.56.1:3000/api/categories/all")
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
        <View style={mainStyles.screen}>
            <Header />
            <View style={HomeStyles.intro}>
                <Text style={HomeStyles.bigTitle}>
                    COCO Market
                </Text>
                <Text style={HomeStyles.greet}>
                    Une multitude de produits de votre choix
                </Text>
            </View>
            <Text style={HomeStyles.catTitle}>Catégories</Text>
            <View style={HomeStyles.categories}>
                <ScrollView
                    overScrollMode="never"
                    contentContainerStyle={HomeStyles.scroll}
                    horizontal={true}
                >
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