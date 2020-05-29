import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const Modal = () => {
	const { savedTemplate, errorLog, resetState, modalOn, setModal } = useContext(GlobalContext)

	const modalBody = () => {
		if(savedTemplate) {
			return (
				<div>
					<div className="center_logo">
						<img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
					</div>
					<h2>Template saved</h2>
					<div className="container-fluid">
						<div className="row">
							<div className="col-4 offset-4">
								<p><span className="response_output">{savedTemplate.name}</span></p>
							</div>
						</div>
						<div className="row">
							<div className="col-2 offset-4">
								<p>Category: <span className="response_output">{savedTemplate.category}</span></p>
								<p>Structure: <span className="response_output">{savedTemplate.structure}</span></p>
								<p>ID: <span className="response_output monospace">{savedTemplate._id}</span></p>
							</div>
							<div className="col-2">
								<p>Color palette: <span className="response_output">{savedTemplate.color}</span></p>
								<p>Font pairing: <span className="response_output">{savedTemplate.font}</span></p>
							</div>
						</div>
					</div>
				</div>
			)
		} else if(errorLog) {
			return (
                <div>
					<h2>Something went wrong</h2>
					<div className="container-fluid">
						<div className="row">
							<div className="col-4 offset-4">
								<p className="monospace">{ errorLog }</p>
							</div>
						</div>
                	</div>
				</div>
			)
		} else return (
			<h1>Loading...</h1>
		)
	}

	const modalButtons = () => {
		if(savedTemplate) {
			return (
				<div className="submit_buttons">
					<div className="row">
						<Link to="/templates" onClick={() => {
							setModal(false)
							resetState()
						}}>
							<button className="btn secondary_button">Back home</button>
						</Link>
						<button className="btn primary_button" onClick={() => setModal(false)}>Continue editing</button>
						<Link to="search_models" onClick={() => {
							setModal(false)
							resetState()
						}}>
							<button className="btn primary_button">Add new one</button>
						</Link>
					</div>
				</div>
			)
		} else if(errorLog) {
			return (
				<div className="submit_buttons">
					<div className="row">
						<button className="btn secondary_button">Back home</button>
						<button className="btn primary_button">Continue editing</button>
					</div>
				</div>
			)
		}
	}

	const displayModal = () => {
		return {
			visibility: modalOn ? 'visible' : 'hidden'
		}
	}
	
	return (
		<div className="mymodal_screen" style={displayModal()}>
			<div className="mymodal-dialog">
				<div className="mymodal-header">
					<button className="secondary_button mini-button" onClick={() => setModal(false)}>
						<svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
							<path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
						</svg>
					</button>
				</div>
				<div className="mymodal-body">
					{modalBody()}
				</div>
				{modalButtons()}
			</div>
		</div>
    )
}
