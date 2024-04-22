import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalPrice: 0,
        cartSize: 0,
        categorie: "meubles"
    },
    reducers: {
        addToCart: (state, action) => {
            // { type:cart/addToCart,payload:{libelle: Nike supra,prix:25$ }}

            const existedInCart = state.products.find(item => item.libelle === action.payload.libelle)

            if (existedInCart) {

                // const indexState = products.indexOf(existedInCart)

                state.products.map(item => {


                    if (item.libelle === action.payload.libelle) {
                        item.nbre += 1
                        item.total = item.prix * item.nbre
                    }

                })

                // products[indexState].nbre += 1

                // products = actualState

            } else {


                state.products.push(
                    {
                        libelle:action.payload.libelle,
                        total: action.payload.prix,
                        nbre: 1
                    }
                )
            }

            state.cartSize = state.products.length
            state.totalPrice = calcul(state.products)

        },

        removeFromCart: (state, action) => {
            // { type:cart/removeFromCart,payload:Nike supra }

            const { products, cartSize, totalPrice } = state

            products = products.find(item => item.libelle !== action.payload.libelle)

            state.cartSize = products.length
            state.totalPrice = calcul(products)

            return state

        },

        chooseCategory: (state, action) => {
            state.categorie = action.payload
        },

        giveNumberOfOrder: (state, action) => {
            const { products } = state

            return products.find(item => item.libelle === action.payload).nbre
        },
        orderCart: async (state, action) => {
            const r = await fetch("http://192.168.56.1:3000/api/produit/commande", {
                method: "POST",
                body: action.payload
            })

            return r.ok
        },
        payOrder: async (state, action) => {
            const r = await fetch("http://192.168.56.1:3000/api/produit/payement", {
                method: "POST",
                body: action.payload
            })

            return r.ok
        },
    }
})

export const { addToCart, removeFromCart, chooseCategory, giveNumberOfOrder, orderCart, payOrder } = cartSlice.actions

function calcul(products) {
    let somme = 0
    if (products.length !== 0) {
        products.map(product => somme += parseInt(product.total))
    }
    return somme
}