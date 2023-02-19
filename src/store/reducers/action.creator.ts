import axios from 'axios'
import { API_URL } from '../../config/api.config'
import { IProduct } from '../../type/product'
import { AppDispatch } from '../store'
import { productSlice } from './product.slice'

export const fetchProducts = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(productSlice.actions.productFetching())
		const response = await axios.get<IProduct[]>(API_URL)
		dispatch(productSlice.actions.productFetchingSuccess(response.data))
	} catch (e) {
		dispatch(productSlice.actions.productFetchingError((e as Error).message))
	}
}
