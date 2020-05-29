import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TableElement = ({ section, category }) => {
	const { updateSections, sectionList, checkSections } = useContext(GlobalContext)

	let childrenString = section.children.join(", ")
	if (childrenString.length >= 20) {
		childrenString = childrenString.substr(0, 17) + "..."
	}
	
	const selectSection = () => {
		const newSectionList = sectionList.map(item => {
			if (item.id === category.id) {
				return {...item, docId: section.id}
			} else return {...item}
		})

		const checkedList = verifyList(newSectionList)
		updateSections(checkedList)
	}

	const verifyList = list => {

		let check = true
		for (let i = 0; i < list.length; i++) {
			if (!list[i].docId) {
				check = false
				break
			}
		}

		checkSections(check)
		return list
	}

    return (
        <tr>
			<td>
				<input className="input_radio" type="radio" name="docId"
				onChange={selectSection} checked={section.id === category.docId} />
			</td>
			<td>{section.tag}</td>
			<td>{section.layout}</td>
			<td>{childrenString}</td>
        </tr>
    )
}
