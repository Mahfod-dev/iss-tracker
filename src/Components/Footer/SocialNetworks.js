import { FaTwitterSquare, FaLinkedin, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa';
import style from './Footer.module.css'


export default function SocialNetworks(){
    return(
        <div className='socialNetworks'>
            <a href='https://twitter.com/home'><FaTwitterSquare className={style.socialIcon}/></a>
            <a href='https://www.facebook.com'><FaFacebookSquare className={style.socialIcon}/></a>
            <a href='https://www.linkedin.com'><FaLinkedin className={style.socialIcon}/></a>
            <a href='https://github.com'><FaGithubSquare className={style.socialIcon}/></a>
        </div>
    )
}