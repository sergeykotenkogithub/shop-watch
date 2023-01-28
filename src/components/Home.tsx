import { FC, useState } from 'react'
import styles from './Home.module.scss'
import Header from './Header/Header'
import Products from './Products/Products'
import InfoWatch from './InfoWatch/InfoWatch'
import Benefits from './Benefits/Benefits'

const Home: FC = () => {
	return (
		<div>
			<div className={`${styles.background} indents`}>
				<div className="wrapper">
					<div>
						<Header />
						<InfoWatch />
					</div>
				</div>
			</div>
			<div className="wrapper">
				<Benefits />
				<Products />
			</div>
		</div>
	)
}

export default Home
