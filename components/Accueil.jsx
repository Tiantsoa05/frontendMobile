import React, { useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Header from "./Header/Header";

export default function Accueil({ navigation }) {

    const [categories, setCategories] = useState([])

    useEffect(function () {
        fetch('http://localhost:3000/api/categories/all')
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => alert(error))
    }, [])

    return (
        <View>
            <Header />

            <View style={styles.categories}>
                <ScrollView overScrollMode="never" style={styles.scrollContainer}>
                    {
                        categories.map(categorie => {
                            return <View style={styles.categorie}>
                                <View style={styles.image}>
                                    <Image source={require(`../assets/images/${categorie.Nom_categorie}.png`)} style={styles.picture} />
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.desc}>{categorie.Nom_categorie}</Text>
                                </View>
                            </View>
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
        maxHeight: 100,
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
        color: "white",
        fontSize: 24
    }
})