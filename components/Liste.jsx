import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ListeData from '../data/data.json'
import Header from "./Header/Header";

export default function Liste() {

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Nos produits</Text>
            <View style={styles.filters}>
                <View>
                    <Text>Filtres:</Text>
                </View>
                <View style={styles.filterButtons}>
                    <ScrollView overScrollMode="never" style={{flex:1,width: "100%" ,height:50}}>
                        <TouchableOpacity>
                            <Text>Mobilier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Mobilier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Mobilier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Mobilier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Mobilier</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.list}>
                <ScrollView overScrollMode="never">
                    {
                        ListeData.map(item => {
                            return <View style={styles.card} key={item.id}>
                                <Text>Id: {item.id}</Text>
                                <Text>Id: {item.libelle}</Text>
                                <Text>Id: {item.prix}</Text>
                            </View>
                        })
                    }
                </ScrollView>
            </View>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        card: {
            display: "flex",
            backgroundColor: "grey",
            padding: 10,
            borderRadius: 10,
            minWidth: 50,
            marginBottom: 9
        },
        container: {
            display: "flex",
            flex: 1,
            gap: 15,
            padding: 5
        },
        title: {
            color: "red",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: 19
        },
        list: {
            flex: 1,
            flexDirection: "column-reverse",
            gap: 19,
            padding: 5
        },
        filterButtons: {
            flex: 1,
            display:"flex",
            flexDirection: "row",
            flexWrap:"nowrap",
            width: 100,
            backgroundColor:"red"
        }
    }
)