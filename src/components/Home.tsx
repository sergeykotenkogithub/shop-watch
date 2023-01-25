import { FC } from 'react'
import styles from './Home.module.scss'
import Header from './Header/Header'
import Products from './Products/Products'
import Button from '../ui/Button/Button'

const Home: FC = () => {
	return (
		<div>
			<div className={`${styles.background} wrapper`}>
				<Header />
				<Products />
				<Button />
			</div>
		</div>
	)
}

export default Home
