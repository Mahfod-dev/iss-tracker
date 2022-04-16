import React from 'react'
import { articles } from './data.js'
import style from './Articles.module.css'
import { useParams } from 'react-router-dom'
const ArticleItem = () => {
	const { id } = useParams()

	const articleID = articles.find((article) => article.id === +id)

	const { title, imageFront, content } = articleID
	return (
		<div className={style.articleContainer} style={{ color: 'white' }}>
			<div className={style.articleContainerTitleImg}>
				<h3 className={style.articlePageTitle}>{title}</h3>
				<img className={style.image} src={imageFront} alt='' />
			</div>

			<p className={style.content}>{content}</p>
		</div>
	)
}

export default ArticleItem
