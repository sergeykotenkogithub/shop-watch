import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchProducts } from '../../store/reducers/action.creator'
import { productAPI } from '../../service/product.service'
import Product from '../Product/Product'

const Products: FC = () => {
	// const dispatch = useAppDispatch()
	// const { products, isLoading, error } = useAppSelector(
	// 	(state) => state.productReducer
	// )

	const {
		data: products,
		error,
		isLoading,
	} = productAPI.useFetchAllProductsQuery(null)

	// useEffect(() => {
	// 	dispatch(fetchProducts())
	// }, [])

	return (
		<div>
			<div>1111</div>
			{isLoading && <div>Loading....</div>}
			{error && <div>Ошибка загрузки данных</div>}
			{products &&
				products.map((product) => (
					<Product key={product.id} product={product} />
				))}
		</div>
	)
}

export default Products
