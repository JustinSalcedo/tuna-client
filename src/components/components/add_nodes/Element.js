import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { BrowseFeed } from './BrowseFeed'

export const Element = ({ nodeField, setNodeFields, nodeFields }) => {
    const { updateNodes } = useContext(GlobalContext)

    const [dropdown, setDropdown] = useState(false)

    const deleteField = () => {
		const newNodeFields = nodeFields.filter(item => item.id !== nodeField.id)

		setNodeFields(newNodeFields)
        updateNodes(newNodeFields)
    }
    
    const moveField = up => {
        const newNodeFields = []
        const l = nodeFields.length

        if(up) {
            for (let i = 0; i < l; i++) {
                if (i !== 0 && nodeField.id === nodeFields[i].id) {
                    newNodeFields[i - 1] = nodeFields[i]
                    newNodeFields[i] = nodeFields[i - 1]
                } else newNodeFields[i] = nodeFields[i]
            }
        } else {
            for (let i = l - 1; i >= 0; i--) {
                if (i !== l - 1 && nodeField.id === nodeFields[i].id) {
                    newNodeFields[i + 1] = nodeFields[i]
                    newNodeFields[i] = nodeFields[i + 1]
                } else newNodeFields[i] = nodeFields[i]
            }
        }

		setNodeFields(newNodeFields)
        updateNodes(newNodeFields)
    }

    const display = () => {
        if (dropdown) {
            return (
                <>
                    <BrowseFeed nodeField={nodeField} setNodeFields={setNodeFields} nodeFields={nodeFields} />
                </>
            )
        }
    }
    
    return (
        <>
            <div className="elements_list">
                <div className="auto_input_group" onClick={() => setDropdown(!dropdown)}>
                    <label htmlFor="type">Tag:</label>
                    <input className="auto_input_text" type="text" name="tag" value={nodeField.tag} disabled />
                </div>
                <button className="secondary_button mini-button" onClick={() => moveField(true)} >
                    <svg className="bi bi-chevron-compact-up list_up" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"></path>
                    </svg>
                </button>
                <button className="secondary_button mini-button" onClick={() => moveField(false)} >
                    <svg className="bi bi-chevron-compact-down list_down" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"></path>
                    </svg>
                </button>
                <button className="secondary_button mini-button" onClick={deleteField}>Delete</button>
            </div>
            {display()}
        </>
    )
}
