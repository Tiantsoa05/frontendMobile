import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TextInput} from "react-native";
import { ListStyles, PayStyles, mainStyles } from "../assets/styles/styles";
import Header from "./Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {  chooseCategory } from "../store/CartReducer";
import FilterButton from "./Buttons/FilterButton";
import ProductCard from "./Cards/ProductCard";
import imagePath from "../imagePath";

export default function Liste() {
    const [container, setContainer] = useState([])
    const [categoryFilters, setCategoryFilters] = useState([])
    const { categorie } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [find, setFind] = useState('')
    const [found, setFound] = useState([])
    const [produits, setProduits] = useState([])

    useEffect(function () {
        fetch("http://192.168.56.1:3000/api//produits/all")
            .then(response=>response.json())
            .then(data => {
                setContainer(data)
                setProduits(data.filter(item => item.Nom_categorie === categorie))
            })
            .catch(error => alert(error))

        fetch("http://192.168.56.1:3000/api//categories/all")
            .then(response => response.json())
            .then(data => { setCategoryFilters(data) })
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
        <View style={mainStyles.screen}>
            <Header />
            <Text style={ListStyles.title}>{categorie}</Text>
            <View style={ListStyles.forms}>
                <TextInput
                    value={find}
                    onChangeText={(e) => search(e)}
                    style={PayStyles.input}
                />
                {
                    found.length > 0 &&
                    <View >
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
                        scrollEnabled
                        style={{ flex: 1, width: 50, height: 50, gap: 5 }}
                        horizontal
                    >
                        {
                            categoryFilters.length>0 ?
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
                            }):
                            <Text>Aucun filtre</Text>
                        }
                    </ScrollView>
                </View>
            </View>
            <View style={ListStyles.list}>
                <ScrollView overScrollMode="never">
                    {
                        produits.length>0?
                        produits.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    item={item}
                                />
                            )
                        })
                        : <Text> Aucun produit correspondant à ce catégorie</Text>
                    }
                </ScrollView>
            </View>

        </View>
    )
}