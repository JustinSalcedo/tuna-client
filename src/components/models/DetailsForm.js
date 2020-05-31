import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const DetailsForm = () => {
	const { addDetails, newModel, resetState, setModal, setRender } = useContext(GlobalContext)
	
	const [model, setModel] = useState('')
	const [category, setCategory] = useState('')
	const [structure, setStructure] = useState('')

	const savingModel = (e, id) => {
		e.preventDefault()
		
		const myModel = {
			model,
			category,
			structure
		}

		addDetails(myModel)
		setModal(true)
		if(id) {
			setRender(true)
		}
	}

	const verifier = () => {
		const children = newModel.children.length !== 0

		if (children && category && structure && model) {
			return (
				<div className="row">
					<button className="btn primary_button" onClick={e => {
						savingModel(e)
					}} >Save</button>
					<button className="btn primary_button" onClick={e => {
						savingModel(e, true)
					}} >{"Save & Render"}</button>
				</div>
			)
		}
	}

	const tagList = () => {
		return newModel.children.map(section => (
		<input className="auto_input_text" type="text" name="sections" value={section} disabled />
		))
	}

	return (
    	<>
			<form className="details_form" onSubmit={savingModel} >
				<div className="input_group">
						<label htmlFor="name">Model title</label>
						<input className="input_text" type="text" name="model" 
						onChange={e => setModel(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="name">Category</label>
						<input className="input_text" type="text" name="category" 
						onChange={e => setCategory(e.target.value)} />
				</div>
				<div className="input_group">
						<label htmlFor="name">Structure</label>
						<input className="input_text" type="text" name="structure" 
						onChange={e => setStructure(e.target.value)} />
				</div>
				<div className="auto_input_list">
						<label htmlFor="sections">Section(s): ({newModel.children.length})</label>
						{tagList()}
				</div>
			</form>
			<div className="submit_buttons">
				{verifier()}
				<Link to="search_categories" onClick={resetState}>
					<button className="btn secondary_button">Reset</button>
				</Link>
			</div>
      	</>
    )
}
