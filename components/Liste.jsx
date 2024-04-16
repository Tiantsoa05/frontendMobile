import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ListStyles } from "../assets/styles/styles";
import Header from "./Header/Header";
import { useDispatch, useSelector } from "react-redux";
import ConfirmButton from "./Buttons/ConfirmButton";
import { addToCart, chooseCategory } from "../store/CartReducer";
import FilterButton from "./Buttons/FilterButton";

export default function Liste() {
    const [container, setContainer] = useState([])
    const [categoryFilters, setCategoryFilters] = useState([])
    const categorie = useSelector(state => state.categorie)
    const dispatch = useDispatch()

    useEffect(function () {
        fetch("http://192.168.56.1:3000/api/produits/" + categorie)
            .then(response => response.json()).then(data => { setContainer(data) })
            .catch(error => alert(error))
        fetch("http://192.168.56.1:3000/api/categories")
            .then(response => response.json()).then(data => { setCategoryFilters(data) })
            .catch(error => alert(error))
    }, [])

    return (
        <View style={ListStyles.container}>
            <Header />
            <Text style={ListStyles.title}>Nos produits</Text>
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
                                <View style={ListStyles.card} key={item.id}>
                                    <Text>Id: {item.id}</Text>
                                    <Text>Id: {item.libelle}</Text>
                                    <Text>Id: {item.prix}</Text>
                                    <TouchableOpacity>
                                        <ConfirmButton
                                            title="Add to cart"
                                            onPress={() => dispatch(addToCart(item))}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>
    )
}