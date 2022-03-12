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
		content: 'La Station spatiale internationale, en abrégé SSI (surtout au Canada francophone) ou ISS (d\'après le nom anglais : International Space Station), est une station spatiale placée en orbite terrestre basse, occupée en permanence par un équipage international qui se consacre à la recherche scientifique dans l\'environnement spatial. Ce programme, lancé et piloté par la NASA, est développé conjointement avec l\'agence spatiale fédérale russe, avec la participation des agences spatiales européenne, japonaise et canadienne.',
		image: SpaceStation,
		photos: [ISSphoto,insigne],
		numbers: '123',
	},
	{
		id: 2,
		title: 'Les austronautes',
		imageFront: AstronautCloseFrontPage,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue massa. Aliquam convallis nec nisl sit amet elementum. Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus lorem sed leo pretium, at porttitor enim condimentum. Pellentesque ac sem laoreet, posuere nisi tincidunt, bibendum est. ',
		image: AstronautClose,
		photos: [],
		numbers: '123',
	},
	{
		id: 3,
		title: "L'univers",
		imageFront: PlanetFrontPage,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue massa. Aliquam convallis nec nisl sit amet elementum. Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus lorem sed leo pretium, at porttitor enim condimentum. Pellentesque ac sem laoreet, posuere nisi tincidunt, bibendum est. ',
		image: Planet,
		photos: [],
		numbers: '',
	},
	{
		id: 4,
		title: "Vivre à l'espace",
		imageFront: AstronautFrontPage,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue massa. Aliquam convallis nec nisl sit amet elementum. Praesent dapibus turpis id odio pellentesque aliquet. Sed maximus lorem sed leo pretium, at porttitor enim condimentum. Pellentesque ac sem laoreet, posuere nisi tincidunt, bibendum est. ',
		image: Astronaut,
		photos: [],
		numbers: '',
	},
]
