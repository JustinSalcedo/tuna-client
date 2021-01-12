import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import { GlobalContext } from '../context/GlobalState'

import { BrowseTable } from './BrowseTable'
import { BrowseFeed } from './BrowseFeed'

export const SearchModel = () => {

	const { modelId, getSections, models, updateSections, getModels } = useContext(GlobalContext)

	// componentDidMount() {
    //     axios.get(`http://127.0.0.1:3001/models/search`)
    //         .then(res => getModels(res.body))
	// }

	const searchSections = () => {
		const [model] = models.filter(model => modelId === model._id)
		const sectionList = model.children.map(child => { 
			return { category: child, id: uuidv4() }
		})
		updateSections(sectionList)

		// const newSections = [
		// 	{ "id": 1, "category": "header", "tag": "header", "children": ["1", "2", "3"], "layout": "1", "description": "My towel is blue"},
		// 	{ "id": 2, "category": "article", "tag": "section", "children": ["5", "3", "4"], "layout": "2", "description": "My glass is also blue"},
		// 	{ "id": 3, "category": "footer", "tag": "footer", "children": ["9", "7", "8"], "layout": "3", "description": "But my other glass is red"},
		// 	{ "id": 4, "category": "productDive", "tag": "section", "children": ["3", "7", "6"], "layout": "4", "description": "It's hard to treat my deficit"},
		// 	{ "id": 5, "category": "socialProof", "tag": "section", "children": ["6", "5", "4"], "layout": "5", "description": "I need help"}
		// ]

		// getSections(newSections)

		let url = 'http://127.0.0.1:3001/sections/search'

		axios.post(url, { category: model.children })
			.then(res => {
				const data = res.data.body
				getSections(data)
			})
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
