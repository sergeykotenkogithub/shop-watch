import { FC } from 'react'
import { IProduct } from '../../type/product'
import styles from './Product.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { cartAction } from '../../store/reducers/cart.slice'

const Product: FC<{ product: IProduct }> = ({ product }) => {
	const display = useAppDispatch()

	const { productAdd } = cartAction

	const handleAdd = (product: IProduct) => {
		display(productAdd(product))
	}

	return (
		<div className={styles.product}>
			<div className={styles.name}>{product.name}</div>
			<div>{product.price}</div>
			<button onClick={() => handleAdd(product)}>Add Product</button>
		</div>
	)
}

export default Product
