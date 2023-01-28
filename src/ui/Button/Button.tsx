import { Children, FC, PropsWithChildren, ReactNode } from 'react'
import styles from './Button.module.scss'
import { RiShoppingCartLine } from 'react-icons/ri'

const Button: FC<PropsWithChildren<any>> = ({ children, ...rest }) => {
	return (
		<div className={styles.button} {...rest}>
			{children}
			{/* <div>
				<RiShoppingCartLine size={22} />
				<div>0</div>
			</div> */}
		</div>
	)
}

export default Button
