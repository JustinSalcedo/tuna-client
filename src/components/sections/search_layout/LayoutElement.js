import React, { useState, useContext } from 'react'

import { BrowseFeed } from './BrowseFeed'

import { GlobalContext } from '../context/GlobalState'

export const LayoutElement = () => {
    const { newTags, addLayout, layouts, getLayouts } = useContext(GlobalContext)

    const [dropdown, setDropdown] = useState(false)

    // Dummy list
    const [stylesList, setStylesList] = useState([
        { "_id": 1, "file": "I need to stick that poster", "name": "EssentialHeader", "tags": ["matching", "wet", "emerald"], "sections": ["1", "10"] },
        { "_id": 2, "file": "Lorem ipsum dolor sit amet,", "name": "CentralArticle", "tags": ["beige", "brown", "coffee"], "sections": ["2", "11"] },
        { "_id": 3, "file": "Maecenas rutrum augue mauri", "name": "EssentialFooter", "tags": ["minimal", "cold", "fall"], "sections": ["3", "12"] },
        { "_id": 4, "file": "Vestibulum a sapien odio.", "name": "Infographic4", "tags": ["brown", "contrast", "ginger"], "sections": ["4", "13"] },
        { "_id": 5, "file": "Quisque eleifend vestibulum", "name": "Article&Text", "tags": ["matching", "gold", "dark"], "sections": ["5", "14"] },
        { "_id": 6, "file": "Nullam sagittis orci at neq", "name": "Listing", "tags": ["cyan", "cold", "greenery"], "sections": ["6", "15"] },
        { "_id": 7, "file": "Duis felis mi, venenatis ut", "name": "GridGallery", "tags": ["minimal", "brown", "matching", "coffe"], "sections": ["7", "16"] },
        { "_id": 8, "file": "Donec eros leo, tincidunt u", "name": "Pyramid", "tags": ["clay", "beige", "orange", "home"], "sections": ["8", "17"] },
        { "_id": 9, "file": "Integer volutpat dolor eget", "name": "Colums2", "tags": ["bright", "yellow", "pink"], "sections": ["9", "18"] }
    ])

    const unselect = () => {
		const newLayout = {
            id: '',
            name: '',
            tags: ''
        }

		addLayout(newLayout)
	}

    const display = () => {
        if (dropdown) {
            return (
                <>
                    <BrowseFeed styles={layouts} getStyles={getLayouts} stylesList={stylesList} 
                     addStyle={addLayout} />
                </>
            )
        }
    }
    
    return (
        <>
            <div className="elements_list" onClick={() => setDropdown(!dropdown)} >
                <div className="auto_input_group">
                    <input className="auto_input_text" type="text" name="name" value={newTags.layout} disabled />
                </div>
                <div className="auto_input_group">
                    <label htmlFor="samples">Tags:</label>
                    <input className="auto_input_text" type="text" name="tags" value={newTags.layoutTags} disabled />
                </div>
                <button className="secondary_button mini-button" onClick={unselect}>Reset</button>
            </div>
            {display()}
        </>
    )
}
