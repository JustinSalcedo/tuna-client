import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

export const DetailsForm = () => {
	const { addDetails, newComponent, resetState, setModal, setRender, childrenType, componentList, resetting } = useContext(GlobalContext)
	
	const [type, setType] = useState('')
	const [tag, setTag] = useState('')
	const [description, setDescription] = useState('')
	const [currentStatus, setCurrentStatus] = useState(resetting)

	const childrenFunction = () => {
		let typeList
		
		switch (childrenType) {
			case 'COMPONENTS':
				typeList = componentList
					.filter(compo => compo.type)
					.map(compo => compo.type)
				return (
					<>
						<label htmlFor="children">Components: ({typeList.length})</label>
						{tagList(typeList)}
					</>
				)

			case 'NODES':
				typeList = newComponent.nodes
				return (
					<>
						<label htmlFor="children">Nodes: ({typeList.length})</label>
						{tagList(typeList)}
					</>
				)

			case 'PLACEHOLDER':
				return (
					<>
						<label htmlFor="children">Placeholder:</label>
						<input className="auto_input_text" type="text" name="children" value={newComponent.placeholder} disabled />
					</>
				)
		
			default:
				return (<></>)
		}
	}

	const savingSection = (e, id) => {
		e.preventDefault()
		
		const myComponent = {
			type,
			tag,
			description
		}

		addDetails(myComponent)
		setModal(true)
		if(id) {
			setRender(true)
		}
	}

	const clearForm = () => {
		resetState()
		setType('')
		setTag('')
		setDescription('')
	}

	if(currentStatus !== resetting) {
		clearForm()
		setCurrentStatus(resetting)
	}

	const verifier = () => {
		let children

		switch (childrenType) {
			case 'COMPONENTS':
				children = newComponent.children !== 0
				break;
			case 'NODES':
				children = newComponent.nodes !== 0
				break;
			case 'PLACEHOLDER':
				children = newComponent.placeholder
				break;
			default:
				break;
		}

		if (children && type && tag) {
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

	const tagList = childList => {
		return childList.map(child => (
		<input className="auto_input_text" type="text" name="children" value={child} disabled />
		))
	}

	return (
    	<>
			<form className="details_form" onSubmit={savingSection} >
				<div className="input_group">
						<label htmlFor="name">Type</label>
						<input className="input_text" type="text" name="type" value={type}
						onChange={e => setType(e.target.value)} />
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
				<div className="auto_input_list">
					{childrenFunction()}
				</div>
			</form>
			<div className="submit_buttons">
				{verifier()}
				<Link to="create_component" onClick={clearForm}>
					<button className="btn secondary_button">Reset</button>
				</Link>
			</div>
      	</>
    )
}
