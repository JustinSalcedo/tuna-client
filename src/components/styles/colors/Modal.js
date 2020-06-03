import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const Modal = () => {
	const { newColor, modalOn, setModal, resetState, renderOn, setRender, file } = useContext(GlobalContext)

	const [colorItem, setColorItem] = useState(null)
	const [errorLog, setErrorLog] = useState(null)
	const [loaded, setLoaded] = useState(false)
	const [childrenCheck, setChildrenCheck] = useState(false)
	const [verified, setVerified] = useState(null)

	const colorFunction = async () => {
		const { tags, name, description, samples } = newColor
		// const formData = new FormData({
		// 	file,
		// 	tags,
		// 	name,
		// 	description
		// })
		// const formData = new FormData()
		// const layoutFile = { ...newColor, file }
		// formData.append(
		// 	name,
		// 	tags,
		// 	description,
		// 	file
		// )

		if(!verified) {
			setVerified({ name, tags, description, file, samples })
			setChildrenCheck(tags.length !== 0 && samples.length !== 0)
		}

		try {
			if(file && childrenCheck && name) {
				await submitSimulation(verified)
					.then(res => {
						setColorItem(res)
						setLoaded(true)
						if(renderOn) {
							window.open("localhost:3000/colors/render/" + res._id, "_blank")
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

	if(modalOn) { colorFunction() }

	const resetModal = () => {
		setModal(false)
		resetState()
		setColorItem(null)
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
						{colorItem ? (
						<>
							<div className="center_logo">
								<img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
							</div>
							<h2>Color saved</h2>
							<div className="container-fluid">
								<div className="row">
									<div className="col-2 offset-4">
										<p><span className="response_output">{colorItem.name}</span></p>
									</div>
								</div>
								<div className="row">
									<div className="col-2 offset-4">
										<p>Samples: 
											<span className="response_output">{colorItem.samples.length >= 40 ? colorItem.samples
											.join(", ").substr(0, 40) : colorItem.samples.join(", ")}</span>
										</p>
										<p>ID: <span className="response_output monospace">{colorItem._id}</span></p>
									</div>
									<div className="col-2">
										<p>Tags: 
											<span className="response_output">{colorItem.tags.length >= 40 ? colorItem.tags
											.join(", ").substr(0, 40) : colorItem.tags.join(", ")}</span>
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
							<Link to="/styles/colors" onClick={() => {
								setModal(false)
								resetState()
							}}>
								<button className="btn secondary_button">Back home</button>
							</Link>
							<button className="btn primary_button" onClick={() => setModal(false)}>Continue editing</button>
							{colorItem ? (
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