import React from "react"
import { TouchableOpacity, View, Image, Text } from "react-native"
import imagePath from "../../imagePath"
import { HomeStyles } from "../../assets/styles/styles"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function CategoryCard({ categorie, selectCategory }) {
    return (
        <TouchableOpacity
            onPress={() => selectCategory(categorie.Nom_categorie)}
        >
            <View style={HomeStyles.categorie}>
                <View style={HomeStyles.image}>
                    <Image
                        source={imagePath[categorie.Nom_categorie.split(' ').join("_").toLocaleLowerCase()]}
                        style={HomeStyles.picture}
                        blurRadius={2.5}
                    />
                </View>
                <View style={HomeStyles.description}>
                    <Text style={HomeStyles.desc}>{categorie.Nom_categorie}</Text>
                </View>
                <View style={HomeStyles.round}>
                    <Text style={HomeStyles.plus}>
                        <FontAwesome5Icon
                            name="plus"
                            color={"black"}
                            size={25}
                        />
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}