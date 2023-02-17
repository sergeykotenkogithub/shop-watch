import { FC } from 'react'
import WhyChoseUpImg from '../../images/why-choose-up.jpg'
import InfoAndSpecifications from '../../ui/InfoAndSpecifications/InfoAndSpecifications'

const WhyChoseUp: FC = () => {
	const items = [
		'1 Year Warranty',
		'Refund Police',
		'Free Shipping',
		'Authentic Product',
		'Dedicated Support',
	]

	const smallTitle = 'Why choose up'
	const title = 'Choice Our Best & Fashionable Products'

	return (
		<InfoAndSpecifications
			items={items}
			image={WhyChoseUpImg}
			title={title}
			smallTitle={smallTitle}
			reverse={true}
		>
			<p>
				When you give people the power to work the way they want, with the tools
				they love, they are inspired to do the best work of their lives. Apple
				makes it easy to give employees the power to choose their own devices,
				while simplifying IT management and maintaining corporate standards.
			</p>
		</InfoAndSpecifications>
	)
}

export default WhyChoseUp
