import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const DetailsForm = () => {
	const { newTags, addDetails, newTemplate, saveTemplate, catchError, resetState, setModal } = useContext(GlobalContext)
	
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	const savingTemplate = (e, id) => {
		e.preventDefault()
		
		const myTemplate = {
			name,
			description
		}

		addDetails(myTemplate)
		submitSimulation(newTemplate)
			.then(upload => {
				saveTemplate(upload)
				if(id) {
					window.open("localhost:3000/templates/render/" + upload.id, "_blank")
				}
			})
			.catch(err => catchError(err))
	}

	const submitSimulation = (template) => {
		return new Promise((resolve, reject) => {
			const key = true
			if(key) {
				resolve(template)
			} else reject("Here's an error")
		})
	}

	const verifier = () => {
		const { children, category, structure, color, font } = newTemplate

		if (children && category && structure && color && font && name) {
			return (
				<div className="row">
					<button className="btn primary_button" onClick={e => {
						setModal(true)
						savingTemplate(e)
					}} >Save</button>
					<button className="btn primary_button" onClick={e => {
						setModal(true)
						savingTemplate(e, true)
					}} >{"Save & Render"}</button>
				</div>
			)
		}
	}

	return (
    	<>
			<form className="details_form" onSubmit={savingTemplate} >
				<div className="input_group">
						<label htmlFor="name">Name</label>
						<input className="input_text" type="text" name="name" 
						onChange={e => setName(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="description">Description (optional)</label>
						<textarea className="input_textarea" name="description" cols="30" rows="10" 
						onChange={e => setDescription(e.target.value)} ></textarea>
				</div>
				<div className="auto_input_group">
						<label htmlFor="category">Category:</label>
						<input className="auto_input_text" type="text" name="category" value={newTemplate.category} disabled />
				</div>
				<div className="auto_input_group">
						<label htmlFor="structure">Structure:</label>
						<input className="auto_input_text" type="text" name="structure" value={newTemplate.structure} disabled />
				</div>
				<div className="auto_input_group">
						<label htmlFor="color">Color palette:</label>
						<input className="auto_input_text" type="text" name="color" value={newTags.color} disabled />
				</div>
				<div className="auto_input_group">
						<label htmlFor="font">Font pairing:</label>
						<input className="auto_input_text" type="text" name="font" value={newTags.font} disabled />
				</div>
			</form>
			<div className="submit_buttons">
				{verifier()}
				<Link to="search_models">
					<button className="btn secondary_button" onClick={resetState}>Reset</button>
				</Link>
			</div>
      	</>
    )
}
