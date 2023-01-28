import { FC } from 'react'
import styles from './Benefits.module.scss'
import { IBenefits } from './Benefits.interface'

const BenefitItem: FC<{ benefit: IBenefits }> = ({ benefit }) => {
	return (
		<div className={styles.block}>
			{benefit.icon}
			<div className={styles.title}>{benefit.title}</div>
			<div className={styles.text}>{benefit.text}</div>
		</div>
	)
}

export default BenefitItem
