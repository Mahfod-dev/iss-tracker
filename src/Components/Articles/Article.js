export default function Article({ titleArticle, imageArticle }) {
	return (
		<div className='article'>
			<div className='articleTitle'>
				<h2>{titleArticle}</h2>
			</div>
			<img src={imageArticle} alt='' />
			{/* alt text à renseigner */}
		</div>
	)
}
