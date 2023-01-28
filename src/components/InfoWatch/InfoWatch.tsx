import { FC } from 'react'
import styles from './InfoWatch.module.scss'
import main from '../../images/main.png'

const InfoWatch: FC = () => {
	return (
		<div className={styles.info}>
			<div className={styles.left_side}>
				<div className={styles.title_wrapper}>
					<div className={styles.title}>Digital Watches</div>
					<div className={styles.title}>That Are Best For</div>
					<div className={styles.title_dedicated}>Daily Use</div>
				</div>
				<div className={styles.text}>
					Every man needs a goog, dolid watch, my favorite watch is the
					presidential rolex
				</div>
			</div>
			<div className={styles.right_side}>
				<div>
					{/* <img className={styles.img} src={main} alt="main" /> */}
					<div className={styles.img}></div>
				</div>
			</div>
		</div>
	)
}

export default InfoWatch
