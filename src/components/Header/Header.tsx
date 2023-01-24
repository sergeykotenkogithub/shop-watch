import { FC } from 'react'

const Header: FC = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>Home</li>
					<li className="text-3xl">Feature</li>
					<li>Product</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
