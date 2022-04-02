import React from 'react'
import Article from '../Articles/Articles'



import style from './Header.module.css'

const Header = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.introduction}>
					<div className={style.introductionFrame}>
						<h1 className={style.mainTitle}>Le titre de notre site web </h1>
						<Article />

						<p>
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							quis augue massa. Aliquam convallis nec nisl sit amet elementum.
							Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus
							lorem sed leo pretium, at porttitor enim condimentum. Pellentesque
							ac sem laoreet, posuere nisi tincidunt, bibendum est.'
						</p>
					</div>
				</div>
				<hr />
			</header>
		</>
	)
}

export default Header
