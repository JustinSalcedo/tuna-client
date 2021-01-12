import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { GlobalContext } from './context/GlobalState'

export const Modal = () => {
	const { newFont, modalOn, setModal, resetState, renderOn, setRender, file } = useContext(GlobalContext)

	const [fontItem, setFontItem] = useState(null)
	const [errorLog, setErrorLog] = useState(null)
	const [loaded, setLoaded] = useState(false)
	const [verified, setVerified] = useState(null)

	const fontFunction = async () => {
		const { tags, name, description, faces } = newFont

		if(!verified) {
			const formData = new FormData()
			formData.append("name", name)
			formData.append("tags", tags)
			formData.append("faces", faces)
			formData.append("description", description)
			formData.append("file", file)
			setVerified(formData)
		}

		try {
			if(file && tags && faces && name) {
				await axios.post("http://127.0.0.1:3001/fonts/add", verified)
					.then(res => {
						setFontItem(res.data.body)
						setLoaded(true)
						if(renderOn) {
							window.open("http://127.0.0.1:3001/fonts/render" + res.data.body._id, "_blank")
							setRender(false)
						}
					})
			}
		} catch (error) {
			setErrorLog(error)
		}
	}

	const submitSimulation = (document) => {
		return new Promise((resolve, reject) => {
			const key = true
			if(key) {
				resolve(document)
			} else reject("Here's an error")
		})
	}

	if(modalOn && !loaded) { fontFunction() }

	const resetModal = () => {
		setModal(false)
		resetState()
		setFontItem(null)
		setVerified(null)
		setLoaded(false)
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
				{loaded ? (
					<div>
						{fontItem ? (
						<>
							<div className="center_logo">
								<img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
							</div>
							<h2>Font saved</h2>
							<div className="container-fluid">
								<div className="row">
									<div className="col-2 offset-4">
										<p><span className="response_output">{fontItem.name}</span></p>
									</div>
								</div>
								<div className="row">
									<div className="col-2 offset-4">
										<p>Font faces: 
											<span className="response_output">{fontItem.faces.length >= 40 ? fontItem.faces
											.join(", ").substr(0, 40) : fontItem.faces.join(", ")}</span>
										</p>
										<p>ID: <span className="response_output monospace">{fontItem._id}</span></p>
									</div>
									<div className="col-2">
										<p>Tags: 
											<span className="response_output">{fontItem.tags.length >= 40 ? fontItem.tags
											.join(", ").substr(0, 40) : fontItem.tags.join(", ")}</span>
										</p>
									</div>
								</div>
							</div>
						</>
						) : (
						<>
							<h2>Something went wrong</h2>
							<div className="container-fluid">
								<div className="row">
									<div className="col-4 offset-4">
										<p className="monospace">{ errorLog }</p>
									</div>
								</div>
							</div>
						</>
						)}
					</div>
				) : (<h1>Loading...</h1>)}
				</div>
				{loaded ? (
					<div className="submit_buttons">
						<div className="row">
							<Link to="/styles/faces" onClick={() => {
								setModal(false)
								resetState()
							}}>
								<button className="btn secondary_button">Back home</button>
							</Link>
							<button className="btn primary_button" onClick={() => setModal(false)}>Continue editing</button>
							{fontItem ? (
								<Link to="add" onClick={() => {
									resetModal()
								}}>
									<button className="btn primary_button">Add new one</button>
								</Link>
							) : (<></>)}
						</div>
					</div>
				) : (<></>)}
			</div>
		</div>
    )
}