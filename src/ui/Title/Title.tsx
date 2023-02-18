import cn from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './Title.module.scss'

interface Ia {
	classNameProps?: string
	children: ReactNode
}

const Title: FC<Ia> = ({ children, classNameProps }) => {
	return <div className={cn(styles.title, classNameProps)}>{children}</div>
}

export default Title
