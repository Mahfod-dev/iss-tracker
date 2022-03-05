import Article from './Article'

import './Articles.css'

import SpaceStationImage from '../../Assets/SpaceStationFrontPage.png'
import AstronautCloseFrontPage from '../../Assets/AstronautCloseFrontPage.png'
import AstronautFrontPage from '../../Assets/AstronautFrontPage.png'
import PlanetFrontPage from '../../Assets/PlanetFrontPage.png'

export default function Articles() {
	const articles = [
		{
			id: 1,
			title: 'La station spatiale',
			imageFront: SpaceStationImage,
			content: '',
			image: '',
			photos: [],
			numbers: '',
		},
		{
			id: 2,
			title: 'Les austronautes',
			imageFront: AstronautCloseFrontPage,
		},
		{
			id: 3,
			title: "L'univers",
			imageFront: PlanetFrontPage,
		},
		{
			id: 4,
			title: "Vivre à l'espace",
			imageFront: AstronautFrontPage,
		},
	]

	return (
		<div className='articlesContainer'>
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
