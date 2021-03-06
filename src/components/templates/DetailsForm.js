import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const DetailsForm = () => {
	const { newTags, addDetails, newTemplate, resetState, setModal, setRender, resetting } = useContext(GlobalContext)
	
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [currentStatus, setCurrentStatus] = useState(resetting)

	const savingTemplate = (e, id) => {
		e.preventDefault()
		
		const myTemplate = {
			name,
			description
		}

		addDetails(myTemplate)
		setModal(true)
		if(id) {
			setRender(true)
		}
	}

	const clearForm = () => {
		resetState()
		setName('')
		setDescription('')
	}

	if(currentStatus !== resetting) {
		clearForm()
		setCurrentStatus(resetting)
	}

	const verifier = () => {
		const { children, category, structure, color, font } = newTemplate

		if (children && category && structure && color && font && name) {
			return (
				<div className="row">
					<button className="btn primary_button" onClick={e => {
						savingTemplate(e)
					}} >Save</button>
					<button className="btn primary_button" onClick={e => {
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
						<input className="input_text" type="text" name="name" value={name}
						onChange={e => setName(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="description">Description (optional)</label>
						<textarea className="input_textarea" name="description" cols="30" rows="10" value={description}
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
				<Link to="search_models" onClick={clearForm}>
					<button className="btn secondary_button">Reset</button>
				</Link>
			</div>
      	</>
    )
}
