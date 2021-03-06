import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const DetailsForm = () => {
	const { addDetails, newSection, resetState, setModal, newTags, setRender, resetting } = useContext(GlobalContext)
	
	const [category, setCategory] = useState('')
	const [tag, setTag] = useState('')
	const [description, setDescription] = useState('')
	const [currentStatus, setCurrentStatus] = useState(resetting)

	const savingSection = (e, id) => {
		e.preventDefault()
		
		const mySection = {
			category,
			tag,
			description
		}

		addDetails(mySection)
		setModal(true)
		if(id) {
			setRender(true)
		}
	}

	const clearForm = () => {
		resetState()
		setCategory('')
		setTag('')
		setDescription('')
	}

	if(currentStatus !== resetting) {
		clearForm()
		setCurrentStatus(resetting)
	}

	const verifier = () => {
		const children = newSection.children.length !== 0
		const { layout } = newSection

		if (children && category && tag && layout) {
			return (
				<div className="row">
					<button className="btn primary_button" onClick={e => {
						savingSection(e)
					}} >Save</button>
					<button className="btn primary_button" onClick={e => {
						savingSection(e, true)
					}} >{"Save & Render"}</button>
				</div>
			)
		}
	}

	return (
    	<>
			<form className="details_form" onSubmit={savingSection} >
				<div className="input_group">
						<label htmlFor="name">Category</label>
						<input className="input_text" type="text" name="category" value={category}
						onChange={e => setCategory(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="name">Tag</label>
						<input className="input_text" type="text" name="tag" value={tag}
						onChange={e => setTag(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="description">Description (optional)</label>
						<textarea className="input_textarea" name="description" cols="30" rows="10" value={description}
						onChange={e => setDescription(e.target.value)} ></textarea>
				</div>
				<div className="auto_input_group">
						<label htmlFor="layout">Layout:</label>
						<input class="auto_input_text" type="text" name="layout" value={newTags.layout} disabled />
				</div>
			</form>
			<div className="submit_buttons">
				{verifier()}
				<Link to="search_components" onClick={clearForm}>
					<button className="btn secondary_button">Reset</button>
				</Link>
			</div>
      	</>
    )
}
