import React from "react"
import { TouchableOpacity,View,Image,Text } from "react-native"
import imagePath from "../../imagePath"
import { HomeStyles } from "../../assets/styles/styles"

export default function CategoryCard({categorie,selectCategory}){
    return (
        <TouchableOpacity
            onPress={() => selectCategory(categorie.Nom_categorie)}
        >
            <View style={HomeStyles.categorie}>
                <View style={HomeStyles.image}>
                    <Image
                        source={imagePath[categorie.Nom_categorie.split(' ').join("_").toLocaleLowerCase()]}
                        style={HomeStyles.picture}
                        blurRadius={8}
                    />
                </View>
                <View style={HomeStyles.description}>
                    <Text style={HomeStyles.desc}>{categorie.Nom_categorie}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}