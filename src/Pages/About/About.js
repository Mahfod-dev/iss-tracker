import React from 'react'

import Team from './Team/Team.js';
import Button from '../../UI/Button/Button';

import logoWCS from '../../Assets/WCSlogo.png';
import reactIcon from '../../Assets/reactIcon.png';
import style from './About.module.css';

export default function About() {
	return (
		<main className={style.aboutTeam}>
			<div className={style.container}>
				<div className={style.containerColoredFrame}>
					<h1 className={style.title}>Notre équipe </h1>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							quis augue massa. Aliquam convallis nec nisl sit amet elementum.
							Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus
							lorem sed leo pretium, at porttitor enim condimentum. Pellentesque
							ac sem laoreet, posuere nisi tincidunt, bibendum est.
						</p>
					</div>
				</div>
				<hr />

			<Team />
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
