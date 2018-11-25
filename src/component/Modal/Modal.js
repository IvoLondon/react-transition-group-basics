import React from 'react';
import './Modal.css'

const Modal = (props) => {
	const modeClasses = ["Modal", props.mode]
	return (
		<div className={modeClasses.join(' ')}>
			<h3>This is a sliding in Modal</h3>
		</div>
	)
}

export default Modal;