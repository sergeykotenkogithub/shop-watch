import { FC, ReactNode } from 'react'
import { BsDot } from 'react-icons/bs'
import styles from './InfoAndSpecifications.module.scss'

interface IInfoAndSpecifications {
	smallTitle: string
	title: string
	items: string[]
	image: string
	height?: string
	reverse?: boolean
	children: ReactNode
}

const InfoAndSpecifications: FC<IInfoAndSpecifications> = ({
	smallTitle,
	title,
	items,
	image,
	height,
	reverse,
	children,
}) => {
	return (
		<div
			className={styles.wrapperInfo}
			style={{ flexDirection: `${reverse ? 'row-reverse' : 'row'}` }}
		>
			<div className={styles.info}>
				<div className={styles.smallTitle}>{smallTitle}</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.text}>{children}</div>
				<div>
					<ul className={styles.list}>
						{items.map((item) => (
							<li className={styles.listItem} key={item}>
								<BsDot fontSize={32} />
								<p>{item}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div
				className={styles.img}
				style={{
					background: `url(${image})`,
					height: `${height}`,
					backgroundPosition: `${reverse ? 'left' : 'center'}`,
				}}
			/>
		</div>
	)
}

export default InfoAndSpecifications
