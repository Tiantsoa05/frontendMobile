import { createSlice } from "@reduxjs/toolkit";

export const StoreSlice = createSlice(
    {
        name: "store",
        initialState: {
            categories: async () => {
                const data = await fetch("http://192.168.56.1:3000/api/categories/all")
                    .then(response => response.json()).then(data)
                    .catch(error => alert(error))

                return data
            },
            products: async () => {
                const data = await fetch("http://192.168.56.1:3000/api/products/all")
                    .then(response => response.json()).then(data)
                    .catch(error => alert(error))

                return data
            }
        },
        reducers: {
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
    }
)

export const { orderCart, payOrder } = StoreSlice.actions
