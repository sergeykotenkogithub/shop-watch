import { FC } from 'react'
import styles from './Home.module.scss'
import Header from './Header/Header'
import Products from './Products/Products'

const Home: FC = () => {
	return (
		<div>
			<Header />
			<Products />
		</div>
	)
}

export default Home
