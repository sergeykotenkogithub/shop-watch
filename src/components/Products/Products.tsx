import { FC } from 'react'
import { productAPI } from '../../service/product.service'
import Product from '../Product/Product'
import styles from './Products.module.scss'
import ProductsTitle from './ProductsTitle'

const Products: FC = () => {
	const {
		data: products,
		error,
		isLoading,
	} = productAPI.useFetchAllProductsQuery(null)

	return (
		<div>
			<ProductsTitle />
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
