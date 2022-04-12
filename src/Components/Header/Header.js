import React from 'react'
import Article from '../Articles/Articles'



import style from './Header.module.css'

const Header = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.introduction}>
					<div className={style.introductionFrame}>
						<h1 className={style.mainTitle}>Realtime ISS station </h1>

						<p>
						The International Space Station (ISS) is a habitable artificial satellite in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada).
						Within this website we offer you access to a world map that allows you to track ISS`s position upon signing up. In addition you can benefit from a number of educational ressources that will help you deepen your knowledge about the ISS.t. Enjoy your visit !
						</p>
					</div>
				</div>
				<hr />
						<Article />
			</header>
		</>
	)
}

export default Header
