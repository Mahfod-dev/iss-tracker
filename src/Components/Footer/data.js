import React from 'react'
import {
	FaTwitterSquare,
	FaLinkedin,
	FaGithubSquare,
	FaFacebookSquare,
} from 'react-icons/fa'
import style from './Footer.module.css'

export const socials = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaTwitterSquare className={style.socialIcon} />,
	},
	{
		id: 2,
		url: 'https://www.facebook.com',
		icon: <FaFacebookSquare className={style.socialIcon} />,
	},
	{
		id: 3,
		url: 'https://www.linkedin.com',
		icon: <FaLinkedin className={style.socialIcon} />,
	},
	{
		id: 4,
		url: 'https://www.github.com',
		icon: <FaGithubSquare className={style.socialIcon} />,
	},
]
