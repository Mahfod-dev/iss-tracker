import React from 'react'
import WorldMap from './WorldMap'
import Coordinates from '../../Utiles/Coordinates'
import style from "./Main.module.css"

export default function Main() {
	return (
		<div className={style["container-map"]}>
			<WorldMap />
			<Coordinates />
		</div>
	)
}
