import { FC } from 'react'
import { BsTrash } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { cartAction } from '../../store/reducers/cart.slice'
import { IProduct } from '../../type/product'
import styles from './Cart.module.scss'

interface ICart {
	openCart: boolean
	setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart: FC<ICart> = ({ openCart, setOpenCart }) => {
	const { cartProducts } = useAppSelector((state) => state.cart)
	const dispatch = useAppDispatch()
	const { productRemove, productAddQuantity, productRemoveQuantity } =
		cartAction

	const handleClose = () => {
		setOpenCart(false)
	}

	const handleRemove = (product: any) => {
		dispatch(productRemove(product))
	}

	const stopEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
	}

	const handleAddQuantity = (product: any) => {
		dispatch(productAddQuantity(product))
	}

	const handleRemoveQuantity = (product: any) => {
		dispatch(productRemoveQuantity(product))
	}

	const totalPrice = cartProducts.length
		? cartProducts.reduce(
				(sum, product: IProduct) => product.price * product?.count + sum,
				0
		  )
		: 0

	return (
		<div
			className={`${styles.cart} ${openCart ? styles.active : ''}`}
			onClick={handleClose}
		>
			<div className={styles.blur} />
			<div className={styles.content} onClick={stopEvent}>
				<div className={styles.title}>Timeshop</div>
				<div className={styles.name}>My Cart</div>
				{cartProducts?.length ? (
					<div>
						{cartProducts.map((product) => (
							<div key={product.id} className={styles.productWrapper}>
								<div
									onClick={() => handleRemove(product.id)}
									className={styles.btn}
								>
									<BsTrash color="white" />{' '}
								</div>
								<div className={styles.product}>
									<img
										src={require(`../../images/watch${product.image}`)}
										alt={product.name}
										className={styles.img}
									/>
									<div>
										<div className={styles.productName}>{product.name}</div>
										<div>{`$ ${product.price}`}</div>
									</div>
								</div>
								<div className={styles.quantity}>
									<div
										onClick={() => handleAddQuantity(product.id)}
										className={styles.btnAddRemove}
									>
										+
									</div>
									<div>{product.count}</div>
									<div
										className={styles.btnAddRemove}
										onClick={() => handleRemoveQuantity(product)}
									>
										-
									</div>
								</div>
							</div>
						))}
						<div className={styles.total}>
							<div>Total:</div>
							<div>{`$ ${totalPrice}`}</div>
						</div>
					</div>
				) : (
					<div className={styles.noGoods}>No goods</div>
				)}
			</div>
		</div>
	)
}

export default Cart
