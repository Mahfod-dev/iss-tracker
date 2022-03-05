import Article from './Article'
import { articles } from './data.js'

import style from './Articles.module.css'

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
