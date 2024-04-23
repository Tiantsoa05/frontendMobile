import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
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
                        libelle: action.payload.libelle,
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
            let initial = state.products

            state.products = initial.filter(item => item.libelle !== action.payload.libelle)

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

        orderCart: async (state) => {
            try {
                const r = await fetch("http://192.168.56.1:3000/api/produit/commande", {
                    method: "POST",
                    body: state.products
                })
            } catch (err) {
                console.log(err)
            }

            // return r.ok
        },

        payOrder: async (state, action) => {
            try {
                const r = await fetch("http://192.168.56.1:3000/api/produit/payement", {
                    method: "POST",
                    body: action.payload
                })
            } catch (error) {
                console.log(error)
            }

            // return r.ok
        },

        reinitialise: (state, action) => {
            state.products = []
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