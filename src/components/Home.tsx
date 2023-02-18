import { FC } from 'react'
import AboutOurWatch from './AboutOurWatch/AboutOurWatch'
import Benefits from './Benefits/Benefits'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Home.module.scss'
import InfoWatch from './InfoWatch/InfoWatch'
import Products from './Products/Products'
import Testimonial from './Testimonial/Testimonial'
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
				<div className="indents-top">
					<AboutOurWatch />
					<WhyChoseUp />
				</div>
			</div>
			<div className="wrapper">
				<Testimonial />
			</div>
			<Footer />
		</div>
	)
}

export default Home
