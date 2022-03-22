import { socials } from './data.js'
import style from './Footer.module.css';

export default function SocialNetworks() {
	return (
		<section>
			{socials.map((social, index) => {
				return (
					<a key={index} className={style.socialIcon} href={social.url}>
						{social.icon}
					</a>
				)
			})}
		</section>
	)
}
