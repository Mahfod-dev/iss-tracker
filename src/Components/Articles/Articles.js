import Article from './Article';

import './Articles.css';

import SpaceStationImage from '../../Assets/SpaceStationFrontPage.png';
import AstronautCloseFrontPage from '../../Assets/AstronautCloseFrontPage.png';
import AstronautFrontPage from '../../Assets/AstronautFrontPage.png';
import PlanetFrontPage from '../../Assets/PlanetFrontPage.png';

export default function Articles(){
    const articles = [
        { 
            title:'La station spatiale',
            imageFront:SpaceStationImage,
            content: '',
            image: '',
            photos:[],
            numbers:''

        },
        { 
            title:'Les austronautes',
            imageFront:AstronautCloseFrontPage
        },
        {
            title:'L\'univers',
            imageFront:PlanetFrontPage
        },
        {
            title:'Vivre à l\'espace',
            imageFront:AstronautFrontPage

        }
    ]
    
    
    
    return (
        <div className='articlesContainer'>
            {articles.map(({title, imageFront}, index) => {
                return(
                    <Article 
                        key={index+1}
                        titleArticle={title}
                        imageArticle={imageFront}
                />
                )})
            }

        </div>
    );
}