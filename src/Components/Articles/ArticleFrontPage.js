
export default function Article ({titleArticle, imageArticle}){
    return (
        
        <div className='article'>

            <div className='articleTitle'>
                <h3>{titleArticle}</h3>
            </div>
            <img src={imageArticle} alt=''/>
{/* alt text à renseigner */}

        </div>
    );
}