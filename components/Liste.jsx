import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import { ListStyles } from "../assets/styles/styles";
import Header from "./Header/Header";
import { useDispatch, useSelector } from "react-redux";
import ConfirmButton from "./Buttons/ConfirmButton";
import { addToCart, chooseCategory, giveNumberOfOrder } from "../store/CartReducer";
import FilterButton from "./Buttons/FilterButton";
import imagePath from "../public/imagePath";
import ProductCard from "./Cards/ProductCard";
import { model } from "../config/config";

export default function Liste() {
    const [container, setContainer] = useState([])
    const [categoryFilters, setCategoryFilters] = useState([])
    const { categorie } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [find, setFind] = useState('')
    const [found, setFound] = useState([])
    const [produits, setProduits] = useState([])

    useEffect(function () {
        model.get("/produits/all")
            .then(response => response.json()).then(data => {
                setContainer(data)
                setProduits(data.filter(item => item.Nom_categorie === categorie))
            })
            .catch(error => alert(error))

        model.get("/categories/all")
            .then(response => response.json()).then(data => { setCategoryFilters(data) })
            .catch(error => alert(error))
    }, [])

    const search = (payload) => {
        setFind(payload)
        setFound(container.find(item => item.libelle.toLowerCase().includes(payload.toLowerCase())))
    }

    const selectCategory = (categorie) => {
        dispatch(chooseCategory(categorie))
        setProduits(
            container.filter(item => item.Nom_categorie === categorie)
        )
    }

    return (
        <View style={ListStyles.container}>
            <Header />
            <Text style={ListStyles.title}>{categorie}</Text>
            <View>
                <TextInput
                    value={find}
                    onChangeText={(e) => search(e)}
                />
                {
                    found.length > 0 &&
                    <View>
                        {
                            found.map((item, index) => {
                                return (
                                    <Text key={index}>{item.libelle}</Text>
                                )
                            })
                        }
                    </View>
                }
            </View>
            <View style={ListStyles.filters}>
                <View>
                    <Text>Filtres:</Text>
                </View>
                <View style={ListStyles.filterButtons}>
                    <ScrollView
                        overScrollMode="never"
                        style={{ flex: 1, width: 150, height: 50, backgroundColor: "red", gap: 8 }}
                        horizontal
                    >
                        {
                            categoryFilters.map(category => {
                                return (
                                    <FilterButton
                                        key={category.id_categorie}
                                        title={category.Nom_categorie}
                                        style={
                                            (category.Nom_categorie === categorie) ?
                                                ListStyles.checked : ListStyles.simple
                                        }
                                        onPress={() => selectCategory(category.Nom_categorie)}
                                    />
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            <View style={ListStyles.list}>
                <ScrollView overScrollMode="never">
                    {
                        produits.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    item={item}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>
    )
}