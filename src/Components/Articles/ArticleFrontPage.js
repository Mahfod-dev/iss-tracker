export default function Article({ titleArticle, imageArticle }) {
	return (
		<div className='article'>
			<div className='articleTitle'>
				<h1>{titleArticle}</h1>
			</div>
			<img src={imageArticle} alt='' />
			{/* alt text à renseigner */}
		</div>
	)
}
