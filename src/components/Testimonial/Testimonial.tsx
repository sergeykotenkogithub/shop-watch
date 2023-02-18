import { FC } from 'react'
import Title from '../../ui/Title/Title'
import styles from './Testimonial.module.scss'
import TestimonialPeople from './TestimonialPeople'

const Testimonial: FC = () => {
	const items = [
		{
			text: 'Find quick result a from multiple sources, quick results and search foe relevant info & results, simple in use fast and trusted',
			img: '/1.jpg',
			name: 'Jenny Walson',
			specialty: 'HR Executive',
		},
		{
			text: 'Find quick result a from multiple sources, quick results and search foe relevant info & results, simple in use fast and trusted',
			img: '/2.jpg',
			name: 'John Hotrick',
			specialty: 'HR Executive',
		},
		{
			text: 'Find quick result a from multiple sources, quick results and search foe relevant info & results, simple in use fast and trusted',
			img: '/3.jpg',
			name: 'Davis Dalak',
			specialty: 'HR Executive',
		},
	]

	return (
		<div className={styles.testimonialWrapper}>
			<div className={styles.title}>
				<Title>Our Testimonial</Title>
				<div className={styles.info}>
					Publish best of your testimonial and let the world know what agreed
					agent or real estate agency you are, testimonials build trust
				</div>
			</div>
			<div className={styles.testimonialPeople}>
				{items.map((item) => (
					<TestimonialPeople item={item} key={item.name} />
				))}
			</div>
		</div>
	)
}

export default Testimonial
