import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "./Header/Header";
import { HomeStyles } from "../assets/styles/styles";
import { useDispatch } from "react-redux";
import { chooseCategory } from "../store/CartReducer";
import { imagePath, images } from "../imagePath";

export default function Accueil({ navigation }) {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()

    useEffect(function () {
        fetch("http://192.168.88.10:3000/api/categories/all")
            .then(response => response.json())
            .then(response => {
                // console.log(Array.from(response.data))
                // let array = Array.from(response.data)
                // setCategories(array)
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
                <ScrollView overScrollMode="never" style={HomeStyles.scrollContainer}>
                    {
                        categories.length > 0 ?
                            categories.map((categorie) => {
                                // // console.log(image)
                                let image = imagePath[categorie.Nom_categorie.split(' ').join("_").toLocaleLowerCase()]
                                console.log(imagePath, image)
                                // const imageUrl = images(`${image}.png`)
                                // const im = imagePath.find(i => (i.name === image) && i.url)
                                return (
                                    <TouchableOpacity
                                        key={categorie.id_categorie}
                                        onPress={() => selectCategory(categorie.Nom_categorie)}
                                    >
                                        <View style={HomeStyles.categorie}>
                                            <View style={HomeStyles.image}>
                                                <Image
                                                    source={image}
                                                    style={HomeStyles.picture}
                                                />
                                            </View>
                                            <View style={HomeStyles.description}>
                                                <Text style={HomeStyles.desc}>{categorie.Nom_categorie}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }) :
                            <Text>Aucune catégorie</Text>
                    }
                </ScrollView>
            </View>
        </View>
    )
}