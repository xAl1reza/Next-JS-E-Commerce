'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, qty } = action.payload
      const duplicateProduct = state.cart.find((p) => p.id === product.id)

      if (duplicateProduct) {
        state.cart = state.cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        )
      } else {
        state.cart = [...state.cart, { ...product, qty: qty }]
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload)
    },
    increment: (state, action) => {
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty + 1 } : p
      )
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty - 1 } : p
      )
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearStatus,
  increment,
  decrement,
  clearCart,
} = cartSlice.actions
export const cartReducer = cartSlice.reducer

export const totalAmountCart = ({ shoppingCart }) => {
  return shoppingCart.cart.reduce((total , product) => {
    return product.is_sale ?  total + (product.qty * product.sale_price)  : total + (product.qty * product.price)
  } , 0)
}
