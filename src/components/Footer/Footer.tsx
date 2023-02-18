import { FC } from 'react'
import Title from '../../ui/Title/Title'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className="wrapper">
				<Title>Timeshop</Title>
				<div className={styles.information}>
					<a href="mailto:mail@htmlacademy.ru">timeshop@company.com</a>
					<a href="tel:+44 123 654 7890">+44 123 654 7890</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
