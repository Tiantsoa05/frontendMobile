import React from "react";
import { Pressable, Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Header from "./Header/Header";

export default function Accueil({ navigation }) {

    const handlePress = () => {
        alert('Hello')
    }
    return (
        <View>
            <Header />

            <Pressable
                onPress={handlePress}
            >
                <Text style={styles.title}>Catégories</Text>
            </Pressable>
            <View style={styles.categories}>
                <ScrollView overScrollMode="never" style={styles.scrollContainer}>
                    <View style={styles.categorie}>
                        <View style={styles.image}>
                            <Image source={require("../assets/cmd.png")} style={styles.picture} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur</Text>
                        </View>
                    </View>
                    <View style={styles.categorie}>
                        <View style={styles.image}>
                            <Image source={require("../assets/cmd.png")} style={styles.picture} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur</Text>
                        </View>
                    </View>
                    <View style={styles.categorie}>
                        <View style={styles.image}>
                            <Image source={require("../assets/cmd.png")} style={styles.picture} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur</Text>
                        </View>
                    </View>
                    <View style={styles.categorie}>
                        <View style={styles.image}>
                            <Image source={require("../assets/cmd.png")} style={styles.picture} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur</Text>
                        </View>
                    </View>
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