import Article from './Article'
import { articles } from './data.js'

import './Articles.css'

export default function Articles() {
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
