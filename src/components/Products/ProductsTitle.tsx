import { FC } from 'react'
import styles from './Products.module.scss'

const ProductsTitle: FC = () => {
	return (
		<div>
			<div className={styles.title}>Take Our Product</div>
			<p className={styles.text}>
				We provide marketing services to startups and small business looking for
				a partner of their digital
			</p>
		</div>
	)
}

export default ProductsTitle
