import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../type/product'

interface ICartSlice {
	cartProducts: IProduct[]
}

const initialState: ICartSlice = {
	cartProducts: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		productAdd: (state, action: PayloadAction<IProduct>) => {
			state.cartProducts.push(action.payload)
		},
		productRemove: (state, action: PayloadAction<number>) => {
			console.log(action.payload)
			state.cartProducts = state.cartProducts.filter(
				(product) => product.id !== action.payload
			)
			console.log(state.cartProducts)
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartAction = cartSlice.actions
