import Article from './Article'
import { articles } from './data.js'

import style from './Articles.module.css'

import SpaceStationImage from '../../Assets/SpaceStationFrontPage.png'
import AstronautCloseFrontPage from '../../Assets/AstronautCloseFrontPage.png'
import AstronautFrontPage from '../../Assets/AstronautFrontPage.png'
import PlanetFrontPage from '../../Assets/PlanetFrontPage.png'

export default function Articles() {
	return (
		<div className={style.articlesContainer}>
			{articles.map(({ title, imageFront, id }) => {
				return (
					<Article
						key={id}
						id={id}
						titleArticle={title}
						imageArticle={imageFront}

					/>
				)
			})}
		</div>
	)
}
