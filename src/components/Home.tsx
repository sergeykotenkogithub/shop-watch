import { FC } from 'react'
import AboutOurWatch from './AboutOurWatch/AboutOurWatch'
import Benefits from './Benefits/Benefits'
import Header from './Header/Header'
import styles from './Home.module.scss'
import InfoWatch from './InfoWatch/InfoWatch'
import Products from './Products/Products'
import WhyChoseUp from './WhyChoseUp/WhyChoseUp'

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
				<AboutOurWatch />
				<WhyChoseUp />
			</div>
		</div>
	)
}

export default Home
