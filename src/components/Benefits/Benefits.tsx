import { FC } from 'react'
import styles from './Benefits.module.scss'
import { TbTruckDelivery } from 'react-icons/tb'
import { IBenefits } from './Benefits.interface'
import { BsHeadset } from 'react-icons/bs'
import { AiFillIdcard } from 'react-icons/ai'
import BenefitItem from './BenefitItem'

const Benefits: FC = () => {
	const benefits: IBenefits[] = [
		{
			icon: <TbTruckDelivery color="orange" className={styles.icon} />,
			title: 'Free Shipping',
			text: 'Free Shipping On All Online Order',
		},
		{
			icon: <BsHeadset color="orange" className={styles.icon} />,
			title: '24/7 Support',
			text: 'Contact us any time for you problem',
		},
		{
			icon: <AiFillIdcard color="orange" className={styles.icon} />,
			title: 'Secure payment',
			text: 'Hey, don`t worry, we ensure secure transaction',
		},
	]

	return (
		<div className={styles.benefits}>
			{benefits.map((benefit) => (
				<BenefitItem key={benefit.title} benefit={benefit} />
			))}
		</div>
	)
}

export default Benefits
