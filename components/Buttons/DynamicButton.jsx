import React from "react";

export default function DynamicButton({children,props}){
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={props.styles.button}>
                <Text style={props.styles.title}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}