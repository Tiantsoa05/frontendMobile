import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [
            {
                libelle: String,
                nbre: Number
            }
        ]
    },
    reducers: {
        add: (state, productName) => {

            let actualState = state.products
            const existedInCart = actualState.find(item => item.libelle === productName)

            if (existedInCart) {

                const indexState = actualState.indexOf(existedInCart)
                actualState[indexState].nbre += 1
                state.products = actualState

            } else {
                state.products = [...actualState, { libelle: state, nbre: 1 }]
            }

        },

        remove: (state, productName) => {

            let newState = state.products.find(item => item.libelle !== productName)
            state.products = newState

        }
    }
})