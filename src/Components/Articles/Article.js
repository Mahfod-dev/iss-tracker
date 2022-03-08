import { Link, useParams } from 'react-router-dom'

import style from './Articles.module.css'

export default function Article({ titleArticle, imageArticle, id }) {
	return (
		<article className={`${style.article}`}>
			<Link to={`/article/${id}`}>
				<div className={style.articleTitle}>
					<h2>{titleArticle}</h2>
				</div>

				<img src={imageArticle} alt='' />
			</Link>
			{/* alt text à renseigner */}
		</article>
	)
}
