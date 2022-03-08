import React from 'react'
import { articles } from './data.js'
import style from './Articles.module.css'
import { useParams } from 'react-router-dom'
const ArticleItem = () => {
	const { id } = useParams()

	const articleID = articles.find((article) => article.id === +id)
	console.log(articleID)
	const { title, imageFront } = articleID
	return (
		<div style={{ color: 'white' }}>
			{title}

			<img src={imageFront} alt='' />
		</div>
	)
}

export default ArticleItem
