import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const DetailsForm = () => {
	const { addDetails, resetState, setModal, setRender, file, resetting } = useContext(GlobalContext)
	
	const [name, setName] = useState('')
	const [tags, setTags] = useState('')
	const [description, setDescription] = useState('')
	const [currentStatus, setCurrentStatus] = useState(resetting)

	const savingLayout = (e, id) => {
		e.preventDefault()

		const myLayout = {
			name,
			tags,
			description
		}

		addDetails(myLayout)
		setModal(true)
		if(id) {
			setRender(true)
		}
	}

	const clearForm = () => {
		resetState()
		setName('')
		setTags('')
		setDescription('')
	}

	if(currentStatus !== resetting) {
		clearForm()
		setCurrentStatus(resetting)
	}

	const verifier = () => {

		if (file && (file.type === "text/css") && tags && name) {
			return (
				<div className="row">
					<button className="btn primary_button" onClick={e => {
						savingLayout(e)
					}} >Save</button>
					<button className="btn primary_button" onClick={e => {
						savingLayout(e, true)
					}} >{"Save & Render"}</button>
				</div>
			)
		}
	}

	return (
    	<>
			<form className="details_form" onSubmit={savingLayout} >
				<div className="input_group">
						<label htmlFor="name">Name</label>
						<input className="input_text" type="text" name="name" value={name}
						onChange={e => setName(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="name">Tags</label>
						<input className="input_text" type="text" name="tags" value={tags}
						onChange={e => setTags(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="description">Description (optional)</label>
						<textarea className="input_textarea" name="description" cols="30" rows="10" value={description}
						onChange={e => setDescription(e.target.value)} ></textarea>
				</div>
			</form>
			<div className="submit_buttons">
				{verifier()}
				<Link to="add" onClick={clearForm}>
					<button className="btn secondary_button">Reset</button>
				</Link>
			</div>
      	</>
    )
}
