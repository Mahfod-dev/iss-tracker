import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from './data.js'

import style from './Team.module.css';

export default function Team(){
    return(
        <div className={style.teamContainer}>
            {teamMembers.map(({ imageMember })=>{
                return (
                    <TeamMemberCard
                        image={imageMember}

                    />
                )
            })}
        </div>
    )
}