import React from 'react'
import { articles } from './data.js'
import style from './Articles.module.css'
import { useParams } from 'react-router-dom'
import { MapContainer } from 'react-leaflet'

const ArticleItem = () => {
	const { id } = useParams()

	const articleID = articles.find((article) => article.id === +id)
	console.log(articleID)
	const { title, image, content, photos, numbers, displayImage } = articleID

	return (
		<main>
		<article className={style.pageContainer}>
			<div className={style.frame}>
			<div className={style.photosDown}>
					<img src={photos[1]} alt='' className={style.photo} />
					<img src={photos[0]} alt='' className={style.photo} />
				</div>
				<h1 className={style.pageTitle}>{title}</h1>
				<p className={style.contentPage}>{content}</p>
				<div className={style.numbersContainer}>
					<div className={style.numbers}>chiffres clès: {numbers}</div>
				</div>
			</div>
			
			<img src={image} alt='' className={style[`${displayImage}`]}/>
		</article>
		</main>
	)
}

export default ArticleItem
