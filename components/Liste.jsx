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

export default function Liste() {
    const [container, setContainer] = useState([])
    const [categoryFilters, setCategoryFilters] = useState([])
    const { categorie } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [find, setFind] = useState('')
    const [found, setFound] = useState([])

    useEffect(function () {
        fetch("http://192.168.56.1:3000/api/produits/" + categorie)
            .then(response => response.json()).then(data => { setContainer(data) })
            .catch(error => alert(error))
        fetch("http://192.168.56.1:3000/api/categories")
            .then(response => response.json()).then(data => { setCategoryFilters(data) })
            .catch(error => alert(error))
    }, [])

    const search = (payload) => {
        setFind(payload)
        setFound(container.find(item => item.libelle.toLowerCase().includes(payload.toLowerCase())))
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
                            found.map(item => {
                                return (
                                    <Text>{item.libelle}</Text>
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
                        style={{ flex: 1, width: "100%", height: 50 }}
                        horizontal
                    >
                        {
                            categoryFilters.map(category => {
                                return (
                                    <FilterButton
                                        title={category.Nom_categorie}
                                        style={
                                            (category.Nom_categorie === categorie) ?
                                                ListStyles.checked : ListStyles.simple
                                        }
                                        onPress={() => dispatch(chooseCategory(category.Nom_categorie))}
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
                        container.map(item => {
                            return (
                                <ProductCard item={item} image={`file:///${imagePath}/images/${item.libelle}.png`} />
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>
    )
}