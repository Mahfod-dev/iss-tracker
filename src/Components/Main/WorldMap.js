import React from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { iconPerson } from './spacialStationIcon'
import style from './worldMap.module.css'
import arrowSvg from '../../Assets/down-arrow-svgrepo-com.svg'

export default function WorldMap(props) {
	const handle = useFullScreenHandle()

	return (
		<>
			<div className={style.leafletContainer}>
				<FullScreen handle={handle}>
					<MapContainer
						style={{ height: '100%', width: '100%' }}
						center={[51.505, -0.09]}
						zoom={4}
						scrollWheelZoom={false}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
						/>
						<Marker position={props.coordinates} icon={iconPerson}>
							{/* <Popup>International spatial station</Popup> */}
						</Marker>
					</MapContainer>
				</FullScreen>
				<p className={style['parag-map']}>
					Now that you are logged in, you can view the map by clicking on the
					button below
				</p>
				<span className={style['span-map']}>
					<img src={arrowSvg} alt='iss' />
				</span>
				<button className={style['button-map']} onClick={handle.enter}>
					Enter fullscreen
				</button>
			</div>
		</>
	)
}
