import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { GlobalContext } from './context/GlobalState'

export const Modal = () => {
	const { newComponent, modalOn, setModal, resetState, renderOn, setRender, childrenType } = useContext(GlobalContext)

	const [componentItem, setComponentItem] = useState(null)
	const [errorLog, setErrorLog] = useState(null)
	const [loaded, setLoaded] = useState(false)
	const [childrenCheck, setChildrenCheck] = useState(false)
	const [verified, setVerified] = useState(null)

	const componentFunction = async () => {
		
		const { type, tag, description } = newComponent
		
		if(!verified) {
			setVerified({ type, tag, description })

			switch (childrenType) {
				case 'COMPONENTS':
					setChildrenCheck(newComponent.children !== 0)
					setVerified({
						type, tag, description,
						children: newComponent.children
					})
					break;
				case 'NODES':
					setChildrenCheck(newComponent.nodes !== 0)
					setVerified({
						type, tag, description,
						nodes: newComponent.nodes
					})
					break;
				case 'PLACEHOLDER':
					setChildrenCheck(newComponent.placeholder)
					setVerified({
						type, tag, description,
						placeholder: newComponent.placeholder
					})
					break;
				default:
					break;
			}
		}

		try {
			if(childrenCheck && type && tag) {
				await axios.post("http://127.0.0.1:3001/components/add", verified)
					.then(res => {
						setComponentItem(res.data.body)
						setLoaded(true)
						if(renderOn) {
							window.open("http://127.0.0.1:3001/components/render/" + res.data.body._id, "_blank")
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

	if(modalOn && !loaded) { componentFunction() }

	const resetModal = () => {
		setModal(false)
		resetState()
		setComponentItem(null)
		setVerified(null)
		setLoaded(false)
	}
	
	const displayModal = () => {
		return {
			visibility: modalOn ? 'visible' : 'hidden'
		}
	}
	
	const childrenFunction = () => {
		let typeList = []
		
		switch (childrenType) {
			case 'COMPONENTS':
				typeList = componentItem.children
				return (
					<>
						<p>Component(s): 
							<span className="response_output">{typeList.length >= 40 ? typeList
							.join(", ").substr(0, 40) : typeList.join(", ")}</span>
						</p>
					</>
				)

			case 'NODES':
				typeList = componentItem.nodes
				return (
					<>
						<p>Node(s): 
							<span className="response_output">{typeList.length >= 40 ? typeList
							.join(", ").substr(0, 40) : typeList.join(", ")}</span>
						</p>
					</>
				)

			case 'PLACEHOLDER':
				return (
					<>
						<p>Placeholder: 
							<span className="response_output">{componentItem.placeholder}</span>
						</p>
					</>
				)
		
			default:
				return (<></>)
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
						{componentItem ? (
						<>
							<div className="center_logo">
								<img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
							</div>
							<h2>Section saved</h2>
							<div className="container-fluid">
								<div className="row">
									<div className="col-2 offset-4">
										<p>Type: <span className="response_output">{componentItem.type}</span></p>
										<p>Tag: <span className="response_output">{componentItem.tag}</span></p>
										<p>ID: <span className="response_output monospace">{componentItem._id}</span></p>
									</div>
									<div className="col-2">
										{childrenFunction()}
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
							<Link to="/components" onClick={() => {
								setModal(false)
								resetState()
							}}>
								<button className="btn secondary_button">Back home</button>
							</Link>
							<button className="btn primary_button" onClick={() => setModal(false)}>Continue editing</button>
							{componentItem ? (
								<Link to="search_components" onClick={() => {
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