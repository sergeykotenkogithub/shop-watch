import axios from 'axios'
import { AppDispatch } from '../store'
import { IProduct } from '../../type/product'
import { productSlice } from './product.slice'

export const fetchProducts = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(productSlice.actions.productFetching())
		const response = await axios.get<IProduct[]>(
			'http://localhost:3004/products'
		)
		dispatch(productSlice.actions.productFetchingSuccess(response.data))
	} catch (e) {
		dispatch(productSlice.actions.productFetchingError((e as Error).message))
	}
}
