import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducers/product.slice'
import { productAPI } from '../service/product.service'
import { cartReducer } from './reducers/cart.slice'

const rootReducers = combineReducers({
	productReducer,
	[productAPI.reducerPath]: productAPI.reducer,
	cart: cartReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducers,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(productAPI.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
