import React from 'react'
import { articles } from './data.js'
import style from './Articles.module.css'
import { useParams } from 'react-router-dom'
import { MapContainer } from 'react-leaflet'

const ArticleItem = () => {
	const { id } = useParams()

	const articleID = articles.find((article) => article.id === +id)
	console.log(articleID)
	const { title, image, content, photos } = articleID

	return (
		<main>
		<article className={style.pageContainer}>
			<div className={style.frame}>
				<h1 className={style.pageTitle}>{title}</h1>
				<p>{content}</p>
				<div className={style.photos}>
					<img src={photos[0]} alt='' className={style.photo} />
					<img src={photos[1]} alt='' className={style.photo} />
				</div>
				<div className={style.numbers}></div>
			</div>
			
			<img src={image} alt='' className={style.imageArticle}/>
		</article>
		</main>
	)
}

export default ArticleItem
