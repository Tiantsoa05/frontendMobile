import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TextInput, FlatList, StyleSheet } from "react-native";
import { ListStyles, PayStyles, mainStyles } from "../assets/styles/styles";
import Header from "./Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import FilterButton from "./Buttons/FilterButton";
import ProductCard from "./Cards/ProductCard";
import { addToCart } from "../store/CartReducer";
import CommandeModal from "./modals/CommandeModal";
import { PanierStyles } from "../assets/styles/styles";

export default function Liste() {
    const [container, setContainer] = useState([])
    const [categoryFilters, setCategoryFilters] = useState([])
    const { categorie } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [find, setFind] = useState('')
    const [found, setFound] = useState([])
    const [produits, setProduits] = useState([])
    const [cartModal, displayCartModal] = useState(false)

    useEffect(function () {
        fetch("http://192.168.56.1:3000/api//produits/all")
            .then(response => response.json())
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
        if (payload !== "") {
            const f = container.find(item => item.libelle.toLowerCase().includes(payload.toLowerCase()))
            if (f !== undefined) {
                setProduits([f])
            } else {
                setProduits([])
            }
            console.log(container.find(item => item.libelle.toLowerCase().includes(payload.toLowerCase())))
        } else {
            setProduits(container)
        }
    }

    const selectCategory = (categorie) => {
        dispatch(chooseCategory(categorie))
        setProduits(
            container.filter(item => item.Nom_categorie === categorie)
        )
    }

    const { ordered } = useSelector(state => state.cart)


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
                <View style={ListStyles.filterButtons}>
                    <ScrollView
                        overScrollMode="false"
                        style={styles.scroll}
                        horizontal={true}
                    >
                        {
                            categoryFilters.length > 0 ?
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
                                }) :
                                <Text>Aucun filtre</Text>
                        }
                    </ScrollView>
                </View>
            </View>

            <View style={ListStyles.list}>
                {
                    produits !== undefined ?
                        <FlatList
                            data={produits}
                            renderItem={({ item }) => <ProductCard display={() => { displayCartModal(true) }} item={item} />}
                            keyExtractor={item => item.libelle}
                            overScrollMode="never"
                        /> :
                        <Text style={{fontSize:50}}>Panier vide</Text>
                }
            </View>

            {
                cartModal &&
                <CommandeModal
                    item={ordered}
                    onDispatch={() => { dispatch(addToCart(ordered)) }}
                    close={() => { displayCartModal(false) }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: 200,
        height: 75,
        paddingTop: 18
    }
})