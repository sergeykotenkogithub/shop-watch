import { FC } from 'react'
import styles from './Cart.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { cartAction } from '../../store/reducers/cart.slice'

interface ICart {
	openCart: boolean
	setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart: FC<ICart> = ({ openCart, setOpenCart }) => {
	const { cartProducts } = useAppSelector((state) => state.cart)
	const dispatch = useAppDispatch()
	const { productRemove } = cartAction

	const handleClose = () => {
		setOpenCart(false)
	}

	const handleRemove = (product: any) => {
		dispatch(productRemove(product))
	}

	const stopEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
	}

	return (
		<div
			className={`${styles.cart} ${openCart ? styles.active : ''}`}
			onClick={handleClose}
		>
			<div className={styles.blur} />
			<div className={styles.content} onClick={stopEvent}>
				<div>CAAARTTT</div>
				{cartProducts?.length ? (
					cartProducts.map((product) => (
						<div key={product.id}>
							<div>{product.name}</div>
							<button onClick={() => handleRemove(product.id)}>Delete</button>
						</div>
					))
				) : (
					<div>Нет товаров</div>
				)}
			</div>
		</div>
	)
}

export default Cart
