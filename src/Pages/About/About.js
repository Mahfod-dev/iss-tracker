import { useState, useEffect } from 'react'

import Team from './Team/Team.js';
import Button from '../../UI/Button/Button';
import MemberDetails from './MemberDetails.js';

import { teamMembers } from './Team/data.js';

import logoWCS from '../../Assets/WCSlogo.png';
import reactIcon from '../../Assets/reactIcon.png';
import style from './About.module.css';

// const [show,setShow] = useState(teamMembreShown);

// 	onmouseover =(e=>{ setShow(id); });
// 	onmouseleave=(e=>{ setShow(4);} );

// const teamMembreShown = 4;

export default function About() {
	return (
		<main className={style.aboutTeam}>
			
			{/* <MemberDetails
				title={teamMembers.longName}
				memberPresentation={teamMembers.presentation}
			/> */}
			
			<hr />

			<Team props={onmouseleave, onmouseover}/>

			<article className={style.projectDescription}>

				<div className={style.container}>
					<div className={style.containerColoredFrame}>
						<h1 className={style.title}>Le Projet </h1>

						<div classNam={style.infoProject}>
							<div className={style.wildeSchoolInfo}>
								<p>Quelques ots sur le contexte et la formation, temps prod et méthodo de travail</p>
								<img src={logoWCS} alt='' />
							</div>
							<div className={style.reactJSinfo}>
								<p>Quelques ots sur le contexte et la formation, temps prod et méthodo de travail</p>
								<img src={reactIcon} alt='' />
							</div>
						</div>
							<Button />
					</div>
				</div>

			</article>

		</main>
	) 
}
