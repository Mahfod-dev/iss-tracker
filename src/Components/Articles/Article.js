import { Link, useParams } from 'react-router-dom'
export default function Article({ titleArticle, imageArticle, id }) {
	console.log(id)
	return (
		<article className='article'>
			<div className='articleTitle'>
				<h2>{titleArticle}</h2>
			</div>
			<Link to={`/article/${id}`}>
				<img src={imageArticle} alt='' />
			</Link>
			{/* alt text à renseigner */}
		</article>
	)
}
