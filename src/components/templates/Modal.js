import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { GlobalContext } from './context/GlobalState'

export const Modal = () => {
	const { newTemplate, modalOn, setModal, resetState, renderOn, setRender } = useContext(GlobalContext)

	const [templateItem, setTemplateItem] = useState(null)
	const [errorLog, setErrorLog] = useState(null)
	const [loaded, setLoaded] = useState(false)

	const templateFunction = async () => {
		const children = newTemplate.children.length !== 0
		const { name, category, structure, color, font } = newTemplate
		try {
			if(children && category && name && structure && color && font) {
				await axios.post("http://127.0.0.1:3001/templates/add", newTemplate)
					.then(res => {
						setTemplateItem(res.data.body)
						setLoaded(true)
						if(renderOn) {
							window.open("http://127.0.0.1:3001/templates/render/" + res.data.body._id, "_blank")
							setRender(false)
						}
					})
			}
		} catch (error) {
			setErrorLog(error)
		}
	}

	if(modalOn && !loaded) { templateFunction() }
	
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
						{templateItem ? (
						<>
							<div className="center_logo">
								<img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
							</div>
							<h2>Template saved</h2>
							<div className="container-fluid">
								<div className="row">
									<div className="col-4 offset-4">
										<p><span className="response_output">{templateItem.name}</span></p>
									</div>
								</div>
								<div className="row">
									<div className="col-2 offset-4">
										<p>Category: <span className="response_output">{templateItem.category}</span></p>
										<p>Structure: <span className="response_output">{templateItem.structure}</span></p>
										<p>ID: <span className="response_output monospace">{templateItem._id}</span></p>
									</div>
									<div className="col-2">
										<p>Color palette: <span className="response_output">{templateItem.color}</span></p>
										<p>Font pairing: <span className="response_output">{templateItem.font}</span></p>
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
							<Link to="/templates" onClick={() => {
								setModal(false)
								resetState()
							}}>
								<button className="btn secondary_button">Back home</button>
							</Link>
							<button className="btn primary_button" onClick={() => setModal(false)}>Continue editing</button>
							{templateItem ? (
								<Link to="search_models" onClick={() => {
									setModal(false)
									resetState()
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


// import React, { Component, useContext } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// import { GlobalContext } from './context/GlobalState'

// export default class Modal extends Component {
// 	constructor(props) {
// 		super(props)
	
// 		this.state = {
// 			templateItem: null,
// 			errorLog: null,
// 			loaded: false
// 		}

// 		this.templateFunction = this.templateFunction.bind(this)
// 		this.resetModal = this.resetModal.bind(this)
// 	}
	
// 	templateFunction() {
// 		try {
// 			axios.post("http://127.0.0.1:3001/templates/add", this.props.upload)
// 				.then(res => {
// 					this.setState({ templateItem: res.data.body, loaded: true })
// 					if(this.props.renderOn) {
// 						window.open("localhost:3000/templates/render/" + res._id, "_blank")
// 						this.props.setRender(false)
// 					}
// 				})
// 		} catch (error) {
// 			this.setState({ errorLog: error })
// 		}
// 	}

// 	resetModal() {
// 		this.setState({
// 			templateItem: null,
// 			errorLog: null,
// 			loaded: false
// 		})
// 		this.props.setModal(false)
// 	}

// 	componentDidMount() {
// 		this.templateFunction()
// 	}

// 	componentWillUnmount() {
// 		this.resetModal()
// 	}
	
// 	render() {

// 		// const { newTemplate, renderOn, setRender, setModal, resetState } = useContext(GlobalContext)
// 		const { loaded, templateItem, errorLog } = this.state

// 		return (
// 			<div className="mymodal_screen" >
// 				<div className="mymodal-dialog">
// 					<div className="mymodal-header">
// 						<button className="secondary_button mini-button" onClick={this.resetModal}>
// 							<svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// 								<path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
// 								<path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
// 							</svg>
// 						</button>
// 					</div>
// 					<div className="mymodal-body">
// 					{loaded ? (
// 						<div>
// 							{templateItem ? (
// 							<>
// 								<div className="center_logo">
// 									<img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
// 								</div>
// 								<h2>Template saved</h2>
// 								<div className="container-fluid">
// 									<div className="row">
// 										<div className="col-4 offset-4">
// 											<p><span className="response_output">{templateItem.name}</span></p>
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="col-2 offset-4">
// 											<p>Category: <span className="response_output">{templateItem.category}</span></p>
// 											<p>Structure: <span className="response_output">{templateItem.structure}</span></p>
// 											<p>ID: <span className="response_output monospace">{templateItem._id}</span></p>
// 										</div>
// 										<div className="col-2">
// 											<p>Color palette: <span className="response_output">{templateItem.color}</span></p>
// 											<p>Font pairing: <span className="response_output">{templateItem.font}</span></p>
// 										</div>
// 									</div>
// 								</div>
// 							</>
// 							) : (
// 							<>
// 								<h2>Something went wrong</h2>
// 								<div className="container-fluid">
// 									<div className="row">
// 										<div className="col-4 offset-4">
// 											<p className="monospace">{ errorLog }</p>
// 										</div>
// 									</div>
// 								</div>
// 							</>
// 							)}
// 						</div>
// 					) : (<h1>Loading...</h1>)}
// 					</div>
// 					{loaded ? (
// 						<div className="submit_buttons">
// 							<div className="row">
// 								<Link to="/templates" onClick={() => {
// 									this.resetModal()
// 									this.props.resetState()
// 								}}>
// 									<button className="btn secondary_button">Back home</button>
// 								</Link>
// 								<button className="btn primary_button" onClick={this.resetModal}>Continue editing</button>
// 								{templateItem ? (
// 									<Link to="search_models" onClick={() => {
// 										this.resetModal()
// 										this.props.resetState()
// 									}}>
// 										<button className="btn primary_button">Add new one</button>
// 									</Link>
// 								) : (<></>)}
// 							</div>
// 						</div>
// 					) : (<></>)}
// 				</div>
// 			</div>
// 		)
// 	}
// }