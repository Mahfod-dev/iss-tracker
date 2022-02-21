import React from 'react'
import ReactDOM from 'react-dom'

const ModalOverlay = () => {
	return <div>Je suis une Modal</div>
}

const Modal = ({ children }) => {
	const portalElement = document.createElement('overlay')

	return (
		<>
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</>
	)
}

export default Modal
