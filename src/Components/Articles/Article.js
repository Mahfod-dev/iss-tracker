import Articles from './Articles.js';

import style from 'Articles.css';

export default function Article(props){
    return(
        <div>
            <div className='frame'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>

            <img src={props.image} alt='' className='shadow'/>
            
        </div>
    );
}