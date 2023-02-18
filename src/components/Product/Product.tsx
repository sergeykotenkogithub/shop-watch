import { FC } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { cartAction } from '../../store/reducers/cart.slice'
import { IProduct } from '../../type/product'
import Button from '../../ui/Button/Button'
import styles from './Product.module.scss'

const Product: FC<{ product: IProduct }> = ({ product }) => {
	const display = useAppDispatch()

	const { productAdd } = cartAction

	const handleAdd = (product: IProduct) => {
		display(productAdd(product))
	}

	return (
		<div className={styles.product}>
			<div className={styles.block}>
				<div className={styles.image_background}>
					<img
						className={styles.image}
						src={require(`../../images/watch${product.image}`)}
						alt="watch"
					/>
				</div>
				<div className={styles.name}>{product.name}</div>
				<div className={styles.price}>$ {product.price}</div>
				<div className={styles.btn_wrapper}>
					<Button className={styles.btn_add} onClick={() => handleAdd(product)}>
						Add to Cart
					</Button>
					<Button className={styles.btn_buy}>Buy Now</Button>
					{/* <button className={styles.btn_add} onClick={() => handleAdd(product)}>
						Add to Cart
					</button> */}
					{/* <button className={styles.btn_buy}>Buy Now</button> */}
				</div>
			</div>
		</div>
	)
}

export default Product
