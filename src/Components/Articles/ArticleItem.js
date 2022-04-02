import React from 'react'
import { articles } from './data.js'
import style from './Articles.module.css'
import { useParams } from 'react-router-dom'
const ArticleItem = () => {
	const { id } = useParams()

	const articleID = articles.find((article) => article.id === +id)
	console.log(articleID)
	const { title, imageFront, content } = articleID
	return (
		<div className={style.articlesContainer} style={{ color: 'white' }}>
			{title}

			<img className={style.image} src={imageFront} alt='' />
			<p>{content}</p>
		</div>
	)
}

export default ArticleItem
