import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<any>> = ({ children, ...rest }) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	)
}

export default Button
