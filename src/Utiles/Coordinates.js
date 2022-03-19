import React from 'react'
import style from "./Coordinates.module.css"

const Coordinates = (props) => {
	
	return (
		<div className={style["coordinates-container"]}>
			Coordinates : {`${props.coordinates.lat} ${props.coordinates.lng}`}
		</div>)
}

export default React.memo(Coordinates)
