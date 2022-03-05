import { Link } from 'react-router-dom'
export default function Article({ titleArticle, imageArticle, id }) {
	console.log(id)
	return (
		<article className='article'>
			<Link to={`/article/${id}`}>
				<div className='articleTitle'>
					<h2>{titleArticle}</h2>
				</div>

				<img src={imageArticle} alt='' />
			</Link>
			{/* alt text à renseigner */}
		</article>
	)
}
