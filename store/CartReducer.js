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

            const { products, cartSize, totalPrice } = state

            const existedInCart = products.find(item => item.libelle === action.payload.libelle)

            if (existedInCart) {

                // const indexState = products.indexOf(existedInCart)

                products.map(item => {

                    const { libelle, nbre, total, prix } = item

                    if (libelle === action.payload.libelle) {
                        nbre += 1
                        total = prix * nbre
                    }

                })

                // products[indexState].nbre += 1

                // products = actualState

            } else {

                const { libelle, prix } = action.payload

                products.push(
                    {
                        libelle,
                        total: prix,
                        nbre: 1
                    }
                )
            }

            cartSize = products.length
            totalPrice = calcul(products)

        },

        removeFromCart: (state, action) => {
            // { type:cart/removeFromCart,payload:Nike supra }

            const { products, cartSize, totalPrice } = state

            products = products.find(item => item.libelle !== action.payload.libelle)

            cartSize = products.length
            totalPrice = calcul(products)

            return state

        },

        chooseCategory: (state, action) => {
            state.categorie = action.payload
        },

        giveNumberOfOrder: (state, action) => {
            const { products } = state

            return products.find(item => item.libelle === action.payload).nbre
        }
    }
})

export const { addToCart, removeFromCart, chooseCategory, giveNumberOfOrder } = cartSlice.actions

function calcul(products) {
    let somme = 0
    if (products.length !== 0) {
        products.map(product => somme += parseInt(product.total))
    }
    return somme
}