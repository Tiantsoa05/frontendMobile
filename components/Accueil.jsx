import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import Header from "./Header/Header";
import { IP_ADDRESS } from "../config/config";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";

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

            <View style={styles.categories}>
                <ScrollView overScrollMode="never" style={styles.scrollContainer}>
                    {
                        categories.map((categorie) => {
                            return <TouchableOpacity key={categorie.id_categorie} onPress={() => selectCategory(categorie.Nom_categorie)}>
                                <View style={styles.categorie}>
                                    <View style={styles.image}>
                                        {/* <Image source={require(`../assets/images/${categorie.Nom_categorie}.png`)} style={styles.picture} /> */}
                                    </View>
                                    <View style={styles.description}>
                                        <Text style={styles.desc}>{categorie.Nom_categorie}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "red",
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: "bold"
    },
    categories: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    categorie: {
        borderRadius: 18,
        marginTop: 8,
        height: 100,
        width: 300,
        position: "relative",
        marginLeft: 25
    },
    image: {
        maxHeight: 250
    },
    picture: {
        maxWidth: 350,
        maxHeight: 250
    },
    scrollContainer: {
        flex: 1,
        width: "100%",
        height: "120%",
        marginTop: 12,
        flexWrap: "wrap",
        backgroundColor: "red",
        padding: 12
    },
    description: {
        position: "absolute",
        backgroundColor: "rgba(22,22,22,0.4)",
        width: "100%",
        height: "100%",
        margin: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    desc: {
        color: "black",
        fontSize: 24
    }
})