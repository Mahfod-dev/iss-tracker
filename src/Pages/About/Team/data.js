import SpaceStationImage from '../../../Assets/SpaceStationFrontPage.png'
import {
	FaLinkedin,
	FaGithubSquare,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import style from './Team.module.css'

export const teamMembers = [
	{
		id: 1,
		longName: 'Mahfod Abdi',
        shortName: 'Mahfod A.',
		imageMember: SpaceStationImage,
		localization: '',
        presentation: '',
        linkedIn: '',
        gitHub: '',
        eMail: '',
	},
	{
		id: 2,
		longName: 'Veneta Andreeva',
        shortName: 'Veneta A.',
		imageMember: SpaceStationImage,
        localization: '',
        presentation: '',
        linkedIn: '',
        gitHub: '',
        eMail: '',
	},
	{
		id: 3,
		longName: 'Matthieu Mary',
        shortName: 'Matthieu M.',
		imageMember: SpaceStationImage,
        localization: '',
        presentation: '',
        linkedIn: '',
        gitHub: '',
        eMail: '',
	},

]

export const socialsTeam =[

	{
		id: 1,
		icon: <MdEmail className={style.socialIcon} />,
	},
	{
		id: 2,
		icon: <FaLinkedin className={style.socialIcon} />,
	},
	{
		id: 3,
		icon: <FaGithubSquare className={style.socialIcon} />,
	},
]