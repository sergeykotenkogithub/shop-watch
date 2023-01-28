import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../type/product'

interface ICartSlice {
	cartProducts: IProduct[]
}

const cartLocalStorage = localStorage.getItem('cart')

const initialState: ICartSlice = {
	cartProducts: cartLocalStorage ? JSON.parse(cartLocalStorage) : [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		productAdd: (state, action: PayloadAction<IProduct>) => {
			state.cartProducts.push(action.payload)
			localStorage.setItem('cart', JSON.stringify(state.cartProducts))
		},
		productRemove: (state, action: PayloadAction<number>) => {
			console.log(action.payload)
			state.cartProducts = state.cartProducts.filter(
				(product) => product.id !== action.payload
			)
			localStorage.setItem('cart', JSON.stringify(state.cartProducts))
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartAction = cartSlice.actions
