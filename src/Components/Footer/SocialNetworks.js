import { socials } from './data.js'
import style from './Footer.module.css';

export default function SocialNetworks() {
	return (
		<section>
			{socials.map((social) => {
				return (
					<a className={style.socialIcon} href={social.url}>
						{social.icon}
					</a>
				)
			})}
		</section>
	)
}
