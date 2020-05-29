import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState'

import { BrowseTable } from './BrowseTable'
import { BrowseFeed } from './BrowseFeed'

export const SearchModel = () => {
	const [reset, setReset] = useState(false)

	const { modelId, getSections, models, updateSections, resetState } = useContext(GlobalContext)

	// if(!models) {
	// 	getModels()
	// }

	const searchSections = () => {
		const [model] = models.filter(model => modelId === model.id)
		const sectionList = model.children.map(child => { 
			return { category: child, id: Math.floor(Math.random() * 100000000) }
		})
		updateSections(sectionList)

		const newSections = [
			{ "id": 1, "category": "header", "tag": "header", "children": ["1", "2", "3"], "layout": "1", "description": "My towel is blue"},
			{ "id": 2, "category": "article", "tag": "section", "children": ["5", "3", "4"], "layout": "2", "description": "My glass is also blue"},
			{ "id": 3, "category": "footer", "tag": "footer", "children": ["9", "7", "8"], "layout": "3", "description": "But my other glass is red"},
			{ "id": 4, "category": "productDive", "tag": "section", "children": ["3", "7", "6"], "layout": "4", "description": "It's hard to treat my deficit"},
			{ "id": 5, "category": "socialProof", "tag": "section", "children": ["6", "5", "4"], "layout": "5", "description": "I need help"}
		]

		getSections(newSections)
	}
	
	const verifier = () => {
		if (modelId) {
			return (
				<div className="center_button">
					<Link to="search_sections">
						<button className="btn primary_button" onClick={searchSections}>Continue >>></button>
					</Link>
				</div>
			)
		} else return (
			<div className="center_button"></div>)
	}
	
	return (
        <>
            <h1>Choose a model</h1>
            <BrowseFeed />
            <BrowseTable />
			{verifier()}
        </>
    )
}
