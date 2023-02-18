import { FC } from 'react'
import styles from './Testimonial.module.scss'

interface ITestimonialPeople {
	text: string
	img: string
	name: string
	specialty: string
}

const TestimonialPeople: FC<{ item: ITestimonialPeople }> = ({ item }) => {
	return (
		<div className={styles.testimonial}>
			<div className={styles.text}>{item.text}</div>
			<div className={styles.man}>
				<div className={styles.img}>
					<img
						src={require(`../../images/testimonial${item.img}`)}
						alt={item.name}
					/>
				</div>
				<div>
					<div className={styles.name}>{item.name}</div>
					<div className={styles.specialty}>{item.specialty}</div>
				</div>
			</div>
		</div>
	)
}

export default TestimonialPeople
