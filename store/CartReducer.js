import { createSlice } from "@reduxjs/toolkit"
import { model } from "../config/config"


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        finalProducts: [],
        totalPrice: 0,
        cartSize: 0,
        categorie: "meubles",
        countOrder: true
    },
    reducers: {

        addToCart: (state, action) => {
            // { type:cart/addToCart,payload:{libelle: Nike supra,prix:25$ }}

            const existedInCart = state.products.find(item => item.libelle === action.payload.libelle)

            if (existedInCart) {

                state.products.map(item => {


                    if (item.libelle === action.payload.libelle) {
                        item.nbre += 1
                        item.total = item.prix * item.nbre
                    }

                })

                state.finalProducts.map(item => {

                    if (item.id_produit === action.payload.id_produit) {
                        item.qte_produit += 1
                    }

                })

            } else {

                state.products.push(
                    {
                        libelle: action.payload.libelle,
                        total: action.payload.prix,
                        nbre: 1
                    }
                )

                state.finalProducts.push(
                    {
                        id_produit: action.payload.id_produit,
                        id_client: 1,
                        qte_produit: 1
                    }
                )

            }

            state.cartSize = state.products.length
            state.totalPrice = calcul(state.products)

        },

        removeFromCart: (state, action) => {

            let initial = state.products
            let initialBuy = state.finalProducts

            state.products = initial.filter(item => item.libelle !== action.payload.libelle)
            state.finalProducts = initialBuy.filter(item => item.id_produit !== action.payload.id_produit)

            state.cartSize = state.products.length
            state.totalPrice = calcul(state.products)

            return state

        },

        chooseCategory: (state, action) => {
            state.categorie = action.payload
        },

        giveNumberOfOrder: (state, action) => {
            return state.products.find(item => item.libelle === action.payload).nbre
        },

        orderCart: (state) => {

            const formData = new FormData()
            formData.append('orders', JSON.stringify(state.finalProducts))

            model.post("/produits/commande", formData)
                .then(response => alert(response.data))
                .catch(error => console.log(error))

        },

        payOrder: (state, action) => {

            const formData = new FormData()
            formData.append('orders', JSON.stringify(action.payload))

            model.post("/produits/payement", formData)
                .then(response => alert(response.data))
                .catch(error => console.log(error))

        },

        reinitialise: (state) => {
            state.products = []
            state.finalProducts = []
            state.categorie = "tendances"
            state.totalPrice = 0
            state.cartSize = 0
        },

        setOrderCounter: (state, action) => {
            state.countOrder = action.payload
        }

    }
})

export const { addToCart, removeFromCart, chooseCategory, giveNumberOfOrder, orderCart, payOrder, reinitialise, setOrderCounter } = cartSlice.actions

function calcul(products) {
    let somme = 0
    if (products.length !== 0) {
        products.map(product => somme += parseInt(product.total))
    }
    return somme
}