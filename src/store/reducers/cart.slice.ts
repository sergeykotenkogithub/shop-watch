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
			const checkProduct = state.cartProducts.some(
				(product) => product.id === action.payload.id
			)

			if (!checkProduct) {
				state.cartProducts.push(action.payload)
			} else {
				state.cartProducts = state.cartProducts.map((product) =>
					product.id === action.payload.id
						? { ...product, count: product.count + 1 }
						: product
				)
			}

			localStorage.setItem('cart', JSON.stringify(state.cartProducts))
		},
		productRemove: (state, action: PayloadAction<number>) => {
			console.log(action.payload)
			state.cartProducts = state.cartProducts.filter(
				(product) => product.id !== action.payload
			)
			localStorage.setItem('cart', JSON.stringify(state.cartProducts))
		},
		productAddQuantity: (state, action: PayloadAction<number>) => {
			state.cartProducts = state.cartProducts.map((product) =>
				product.id === action.payload
					? { ...product, count: (product?.count as number) + 1 }
					: product
			)
			localStorage.setItem('cart', JSON.stringify(state.cartProducts))
		},
		productRemoveQuantity: (state, action: PayloadAction<IProduct>) => {
			if (action.payload.count === 1) {
				state.cartProducts = state.cartProducts.filter(
					(product) => product.id !== action.payload.id
				)
			} else {
				state.cartProducts = state.cartProducts.map((product) =>
					product.id === action.payload.id
						? { ...product, count: (product?.count as number) - 1 }
						: product
				)
			}

			localStorage.setItem('cart', JSON.stringify(state.cartProducts))
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartAction = cartSlice.actions
