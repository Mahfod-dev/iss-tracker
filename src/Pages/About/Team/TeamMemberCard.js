import style from './Team.module.css';
import { socialsTeam } from './data';

export default function TeamMemberCard({ image }){

    
    return(
  
        <article>

				<img src={ image } alt='' className={style.imageMember}/>
			{/* alt text à renseigner */}
                <div className={style.socialNetworksTeamMember}>
                    {socialsTeam.map((icons) => {
                        return (
                            <a className={style.socialIcon} href=''>
                                {icons.icon}
                            </a>
                        );
                    })}
                </div>

        </article>
    );
}