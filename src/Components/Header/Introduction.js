import Title from './Title.js';
import Paragraphe from './Paragraphe.js';

import style from './Header.module.css';

export default function Introduction(){
    return(
        <div className={style.introduction}>
            <div className={style.introductionFrame}>
            
                <Title title='Le titre de notre site web'/>

                <Paragraphe introduction='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue massa. Aliquam convallis nec nisl sit amet elementum. Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus lorem sed leo pretium, at porttitor enim condimentum. Pellentesque ac sem laoreet, posuere nisi tincidunt, bibendum est.'/>
            
            </div>
        </div>

    );
}