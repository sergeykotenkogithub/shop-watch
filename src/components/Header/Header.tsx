import { FC, useState } from 'react'
import styles from './Header.module.scss'
import { RiShoppingCartLine } from 'react-icons/ri'
import Cart from '../Cart/Cart'
import { useAppSelector } from '../../hooks/redux'
import Button from '../../ui/Button/Button'

const Header: FC = () => {
	const [openCart, setOpenCart] = useState<boolean>(false)
	const { cartProducts } = useAppSelector((state) => state.cart)

	const handleOpenCart = () => {
		setOpenCart(!openCart)
	}

	return (
		<div className={styles.indent}>
			<div className={styles.header}>
				<div className={styles.title}>Timeshop</div>
				<div className={styles.menu}>
					<nav>
						<ul className={styles.list}>
							<li>Home</li>
							<li>Feature</li>
							<li>Product</li>
							<li>Contact</li>
						</ul>
					</nav>
					<Button onClick={() => handleOpenCart()}>
						<div className={styles.cart}>
							<RiShoppingCartLine className={styles.icon} size={22} />
							<div>{cartProducts.length}</div>
						</div>
					</Button>
				</div>
			</div>
			<Cart openCart={openCart} setOpenCart={setOpenCart} />
		</div>
	)
}

export default Header
