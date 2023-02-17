import { FC } from 'react'
import AboutOurWatchImg from '../../images/about-our-watch.png'
import InfoAndSpecifications from '../../ui/InfoAndSpecifications/InfoAndSpecifications'

const AboutOurWatch: FC = () => {
	const items = [
		'Cpu Manufacturer: QUALCOMM',
		'Battery Detachable: No',
		'App Download Available: Yes',
		'Movement Type: Electronic',
		'Application Age: GroupAdult',
		'Case Material: Carbon Fibre',
		'Band Material: Silica Gel',
		'Network Mode: 4G',
		'Battery Capacity: 300-450 Mah',
		'Compatibility: All Compatible',
	]

	return (
		<InfoAndSpecifications
			items={items}
			image={AboutOurWatchImg}
			smallTitle={`About Our Watch`}
			title={`For Easy Living, Get The Best & Fashion Smartwatch`}
		>
			<p>The actually assumed me over that take time off and come back.</p>
			<p>
				For year, millions of home shoppers have turned find their dream home.
				Operated by move, home.inc.bd offers a comprehensive list of for sale
				properties
			</p>
		</InfoAndSpecifications>
	)
}

export default AboutOurWatch
