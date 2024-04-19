import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "./Header/Header";
// import { HomeStyles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import imagePath from "../public/imagePath";
import {StyleSheet} from "react-native"
// import path from 'path'

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
                                                source={{ uri: `file:///${imagePath}/images/${categorie.Nom_categorie}.png` }}
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

const HomeStyles = StyleSheet.create(
    {
        title: {
            textAlign: "center",
            color: "red",
            textTransform: "uppercase",
            fontSize: 20,
            fontWeight: "bold"
        },
        picture: {
            maxWidth: 350,
            maxHeight: 250
        },

        categories: {
            // flexDirection: "row",
            // flexWrap: "wrap",
            // justifyContent: "flex-end",
            display: "flex",
            alignItems: "center",
            width: "100%"
        },
        categorie: {
            borderRadius: 18,
            marginTop: 8,
            height: 100,
            width: 300,
            position: "relative",
            marginLeft: 25,
            overflow: "hidden",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            position: "absolute",
            top: 0,
            left: 0,
            width: 300,
            height: 100
        },
        scrollContainer: {
            flex: 1,
            width: 300,
            height: 500,
            padding: 12,
            backgroundColor:"red"
        },
        description: {
            // position: "absolute",
            backgroundColor: "rgba(22,22,22,0.4)",
            width: "100%",
            height: "100%",
            // margin: 8,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        desc: {
            color: "black",
            fontSize: 24,
            textAlign: "center",
            backgroundColor: "#888",
            padding: "11px 8px"
        }
    }
)
