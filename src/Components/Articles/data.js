import SpaceStationImage from '../../Assets/SpaceStationFrontPage.png'
import SpaceStation from '../../Assets/SpaceStation.png'
import AstronautCloseFrontPage from '../../Assets/AstronautCloseFrontPage.png'
import AstronautClose from '../../Assets/AstronautClose.png'
import Astronaut from '../../Assets/Astronaut.png'
import AstronautFrontPage from '../../Assets/AstronautFrontPage.png'
import Planet from '../../Assets/Planet.png'
import PlanetFrontPage from '../../Assets/PlanetFrontPage.png'
import ISSphoto from '../../Assets/ISSphoto.jpeg'
import insigne from '../../Assets/insigneISS.png'


export const articles = [
	{
		id: 1,
		title: 'La station spatiale',
		imageFront: SpaceStationImage,
		content: 'La Station spatiale internationale, en abrégé SSI (surtout au Canada francophone) ou ISS (d\'après le nom anglais : International Space Station), est une station spatiale placée en orbite terrestre basse, occupée en permanence par un équipage international qui se consacre à la recherche scientifique dans l\'environnement spatial. Ce programme, lancé et piloté par la NASA, est développé conjointement avec l\'agence spatiale fédérale russe, avec la participation des agences spatiales européenne, japonaise et canadienne.La Station spatiale internationale est le plus grand des objets artificiels placés en orbite terrestre. Elle s\'étend sur 110 m de longueur, 74 m de largeur et 30 m de hauteur et a une masse d\'environ 420 tonnes en 2019. La Station a une architecture hétérogène avec un segment orbital russe reprenant les choix architecturaux de la station Mir et un segment orbital américain beaucoup plus important et développé selon les standards définis par la NASA.',
		image: SpaceStation,
		displayImage:'imageArticleLeft',
		photos: [ISSphoto,insigne],

		numbers: '420 tonnes en 2019',
	},
	{
		id: 2,
		title: 'Les hommes et l\'espace',
		imageFront: AstronautCloseFrontPage,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue massa. Aliquam convallis nec nisl sit amet elementum. Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus lorem sed leo pretium, at porttitor enim condimentum. Pellentesque ac sem laoreet, posuere nisi tincidunt, bibendum est. ',
		image: AstronautClose,
		displayImage:'style.right',
		photos: [],
		numbers: '123',
	},
	{
		id: 3,
		title: "L'univers",
		imageFront: PlanetFrontPage,
		content: 'L\'Univers, au sens cosmologique, est l\'ensemble de tout ce qui existe, régi par un certain nombre de lois.La cosmologie cherche à appréhender l\'Univers d\'un point de vue scientifique, comme l\'ensemble de la matière distribuée dans l\'espace-temps. Pour sa part, la cosmogonie vise à établir une théorie de la création de l\'Univers sur des bases philosophiques ou religieuses. La différence entre ces deux définitions n\'empêche pas nombre de physiciens d\'avoir une conception finaliste de l\'Univers (voir à ce sujet le principe anthropique).',
		image: Planet,
		displayImage:'imageArticleLeft',
		photos: [],
		numbers: '',
	},
	{
		id: 4,
		title: "Vivre à l'espace",
		imageFront: AstronautFrontPage,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue massa. Aliquam convallis nec nisl sit amet elementum. Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus lorem sed leo pretium, at porttitor enim condimentum. Pellentesque ac sem laoreet, posuere nisi tincidunt, bibendum est. ',
		image: Astronaut,
		displayImage:'imageArticleTopRight',
		photos: [],
		numbers: '',
	},
]
