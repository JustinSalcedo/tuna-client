import React, { useState, useContext } from 'react'

import { BrowseFeed } from './BrowseFeed'

import { GlobalContext } from '../context/GlobalState'

export const Element = ({ section }) => {
    const { updateSections, sectionList, checkSections } = useContext(GlobalContext)

    const [dropdown, setDropdown] = useState(false)

    const unselectSection = () => {
		const newSectionList = sectionList.map(item => {
			if (item.id === section.id) {
				return {...item, docId: undefined}
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

    const verifier = () => {
        if(section.docId) {
            return (
                <input className="input_checkbox" type="checkbox" checked disabled/>
            )
        } else return (
            <input className="input_checkbox" type="checkbox" disabled/>
            )
    }

    const display = () => {
        if (dropdown) {
            return (
                <>
                    <BrowseFeed sectionCategory={section} />
                </>
            )
        }
    }
    
    return (
        <>
            <div className="elements_list" onClick={() => setDropdown(!dropdown)}>
                <div className="auto_input_group">
                    <label htmlFor="category">Category:</label>
                    <input className="auto_input_text" type="text" name="category" value={section.category} disabled />
                </div>
                {verifier()}
                <button className="secondary_button mini-button" onClick={unselectSection}>Reset</button>
            </div>
            {display()}
        </>
    )
}
