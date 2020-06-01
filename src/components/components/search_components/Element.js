import React, { useState, useContext } from 'react'

import { BrowseFeed } from './BrowseFeed'

import { GlobalContext } from '../context/GlobalState'

export const Element = ({ compoEle }) => {
    const { updateComponents, componentList } = useContext(GlobalContext)

    const [dropdown, setDropdown] = useState(false)

    const deleteComponent = () => {
		const newComponentList = componentList.filter(item => item.id !== compoEle.id)

		updateComponents(newComponentList)
    }
    
    const moveField = up => {
        const newComponentList = []
        const l = componentList.length

        if(up) {
            for (let i = 0; i < l; i++) {
                if (i !== 0 && compoEle.id === componentList[i].id) {
                    newComponentList[i - 1] = componentList[i]
                    newComponentList[i] = componentList[i - 1]
                } else newComponentList[i] = componentList[i]
            }
        } else {
            for (let i = l - 1; i >= 0; i--) {
                if (i !== l - 1 && compoEle.id === componentList[i].id) {
                    newComponentList[i + 1] = componentList[i]
                    newComponentList[i] = componentList[i + 1]
                } else newComponentList[i] = componentList[i]
            }
        }

		updateComponents(newComponentList)
    }

    const display = () => {
        if (dropdown) {
            return (
                <>
                    <BrowseFeed compoEle={compoEle} />
                </>
            )
        }
    }
    
    return (
        <>
            <div className="elements_list">
                <div className="auto_input_group" onClick={() => setDropdown(!dropdown)}>
                    <label htmlFor="type">Type:</label>
                    <input className="auto_input_text" type="text" name="type" value={compoEle.type} disabled />
                </div>
                <div className="auto_input_group" onClick={() => setDropdown(!dropdown)}>
                    <label htmlFor="type">Tag:</label>
                    <input className="auto_input_text" type="text" name="tag" value={compoEle.tag} disabled />
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
                <button className="secondary_button mini-button" onClick={deleteComponent}>Delete</button>
            </div>
            {display()}
        </>
    )
}
