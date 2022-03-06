import React from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import style from './worldMap.module.css'
import arrowSvg from '../../Assets/down-arrow-svgrepo-com.svg'


export default function WorldMap() {
	const handle = useFullScreenHandle()

	return (
		<>
			<div className={style.leafletContainer}>
				<FullScreen handle={handle}>
					<MapContainer
						style={{ height: '100%', width: '100%' }}
						center={[51.505, -0.09]}
						zoom={13}
						scrollWheelZoom={false}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
						/>
					</MapContainer>
				</FullScreen>
				<p className={style["parag-map"]}>Maintenant que vous êtes connecté, vous pouvez visualiser la map en cliquant sur le bouton ci-dessous</p>
				<span className={style["span-map"]}><img src={arrowSvg} /></span>
				<button className={style["button-map"]} onClick={handle.enter}>Enter fullscreen</button>
			</div>
		</>
	)
}
