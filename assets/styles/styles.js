import { StyleSheet } from "react-native"

export const mainStyles = StyleSheet.create(
    {
        screen: {
            // backgroundColor: "#3c7cdd",
            backgroundColor: "#88B4F6",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }
    }
)
export const HeaderStyles = StyleSheet.create({
    header: {
        display: "flex",
        height: 120,
        marginLeft: 0,
        justifyContent: "center",
        alignItems: "space-around",
        alignContent: "center",
        backgroundColor: "blue",
    },
    logoContainer: {
        alignSelf: "flex-start",
        top: 10,
        left: 15,
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 50
    },
    titleContainer: {
        top: -20,
        right: 25
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 50
    }
})

export const HomeStyles = StyleSheet.create(
    {
        intro: {
            backgroundColor: "white",
            width: 400,
            marginHorizontal: 8,
            padding: 35,
            borderRadius: 18,
            top: 28,
            lineHeight: 2
        },
        greet: {
            fontSize: 18
        },
        bigTitle: {
            fontStyle: "italic",
            fontFamily: "sans serif",
            fontSize: 25,
            textAlign: "center",
            color: "#88B4F6",
            fontWeight: "bold"
        },
        catTitle: {
            textAlign: "center",
            fontSize: 20,
            color: "white",
        },
        title: {
            textAlign: "center",
            color: "red",
            textTransform: "uppercase",
            fontSize: 20,
            fontWeight: "bold"
        },
        picture: {
            width: '100%',
            height: "100%",
            resizeMode: 'cover',
            borderRadius: 18
        },

        categories: {
            flexDirection: "row",
            flexWrap: "wrap",
            display: "flex",
            alignItems: "center",
            width: "100%",
            flex: 1,
        },
        categorie: {
            borderRadius: 18,
            marginTop: 8,
            height: 250,
            width: 250,
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
            width: 370,
            height: 300
        },
        catTitle: {
            textAlign: "center",
            fontFamily: "Verdana",
            top: 50,
            fontSize: 19,
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "white"
        },
        scroll: {
            flex: 1,
            width: 500,
            height: 400,
            marginTop: 100,
            paddingBottom: 25,
            paddingLeft: -15,
            padding: 12
        },
        description: {
            width: "100%",
            height: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        desc: {
            color: "blue",
            fontSize: 26,
            padding: "5px 5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            top: 80,
            left: -15
        },
        round: {
            backgroundColor: "white",
            width: 50,
            height: 50,
            flex: 1,
            position: "absolute",
            top: 200,
            left: 190,
            borderRadius: 50,
            paddingTop: 12
        },
        plus: {
            textAlign: 'center'
        }
    }
)

export const ListStyles = StyleSheet.create(
    {
        card: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#FFE",
            gap: 10,
            padding: 10,
            borderRadius: 10,
            marginBottom: 9,
            maxWidth: 390,
            height: 235,
            marginLeft: 8,
            paddingRight: 5,
            shadowColor: "#CCC",
            shadowOffset: {
                width: 2,
                height: 3
            },
            marginVertical: 18
        },
        imageContainer: {
            width: 150,
            height: 188
        },
        container: {
            display: "flex",
            flex: 1,
            gap: 18,
            padding: 5
        },
        title: {
            color: "red",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: 19,
            top: 15
        },
        name: {
            fontSize: 18,
            fontWeight: "600",
            width: 200
        },
        desc: {
            fontStyle: "italic",
            width: 220,
            height: 50,
            overflow: "scroll"
        },
        list: {
            flex: 1,
            flexDirection: "column-reverse",
            gap: 9,
            padding: 5,
            top: -95,
            maxHeight: 550
        },
        filterButtons: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "99%",
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            top: 30,
            gap: 8
        },
        checked: {
            container: {
                backgroundColor: "#56CF66",
                padding: 8,
                right: 5,
                borderRadius: 8
            },
            text: {
                color: "white"
            }
        },
        simple: {
            container: {
                backgroundColor: "#C5F266",
                padding: 8,
                right: 5,
            },
            text: {
                color: "green"
            }
        },
        forms: {
            top: 25,
        },
        categoryFilter: {

        },
        filters: {
            top: 45
        },
        buttons: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            top: 25,
            paddingRight: 15
        },
        price: {
            top: 8,
            fontSize: 18
        }
    }
)

export const ListOptions = StyleSheet.create({
    container: {
        right: 0,
        width: 100,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export const PanierStyles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "red",
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10
    },
    buttons: {
        display: "flex",
        gap: 10,
        marginTop: 25
    },
    cart: {
        backgroundColor: "#F3EA55",
        borderRadius: 9,
        marginTop: 8,
        borderRadius: 12,
        padding: 15,
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    details: {
        alignSelf: "flex-start",
        alignContent: "center",
        top: 5,
        maxWidth: "80%"
    },
    decision: {
        alignSelf: "flex-end",
        top: -15,
        right: 8
    },
    info: {
        textAlign: "center",
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "rgba(5,10,200,0.5)",
        marginTop: 25,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 15,
        color: "white"
    }
})

export const PayStyles = StyleSheet.create({
    valeur: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 25,
        marginBottom: -38
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
        marginTop: 60
    },
    input: {
        borderWidth: 1,
        height: 45,
        borderRadius: 8,
        paddingLeft: 8,
        paddingRight: 8
    },
    buttons: {
        display: "flex",
        marginTop: 35,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
    button: {
        height: 35,
        width: 22
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 10,
        justifyContent: "center",
        backgroundColor: "white",
        height: "100%",
        backgroundColor: "#88B4F6"
    },
    title: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 22,
        textTransform: "uppercase",
        color: "blue"
    },
    label: {
        fontSize: 16,
        marginBottom: -15
    }
})