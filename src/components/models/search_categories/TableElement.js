import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TableElement = ({ section, category }) => {
	const { updateSections, sectionList } = useContext(GlobalContext)
	
	const selectSection = () => {
		const newSectionList = sectionList.map(item => {
			if (item.id === section.id) {
				return {...item, category: category._id}
			} else return {...item}
		})

		updateSections(newSectionList)
	}

    return (
        <tr>
			<td>
				<input className="input_radio" type="radio" name="id"
				onChange={selectSection} checked={section.category === category._id} />
			</td>
			<td>{category._id}</td>
			<td>{category.count}</td>
        </tr>
    )
}
