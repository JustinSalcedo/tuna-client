import React, { useState, useContext } from 'react'

import { BrowseFeed } from './BrowseFeed'

import { GlobalContext } from '../context/GlobalState'

export const FontElement = () => {
    const { newTags, addFont, fonts, getFonts } = useContext(GlobalContext)

    const [dropdown, setDropdown] = useState(false)

    // Dummy list
    const [stylesList, setStylesList] = useState([
        { id: 2, file: "Lorem ipsum dolor sit amet,", name: "Writer", tags: ["typewrite", "serif", "light"], faces: ["montserrat", "courier"] },
        { id: 3, file: "Maecenas rutrum augue mauri", name: "Newspaper", tags: ["modern", "serif", "robust"], faces: ["skolar latin", "proxima nova"] },
        { id: 4, file: "Vestibulum a sapien odio.", name: "TextBlock", tags: ["sans", "small", "caps", "robust"], faces: ["alegreya sans", "source sans"] },
        { id: 5, file: "Quisque eleifend vestibulum", name: "Tropical", tags: ["brush", "sans", "display", "light", "hand"], faces: ["pacifico", "quicksand"] }
    ])

    const unselect = () => {
		const newFont = {
            id: '',
            name: '',
            samples: ''
        }

		addFont(newFont)
	}

    const display = () => {
        if (dropdown) {
            return (
                <>
                    <BrowseFeed styles={fonts} getStyles={getFonts} stylesList={stylesList} 
                    tagging={["Faces", "faces"]} addStyle={addFont} />
                </>
            )
        }
    }
    
    return (
        <>
            <div className="elements_list" onClick={() => setDropdown(!dropdown)} >
                <div className="auto_input_group">
                    <input className="auto_input_text" type="text" name="name" value={newTags.font} disabled />
                </div>
                <div className="auto_input_group">
                    <label htmlFor="samples">Samples:</label>
                    <input className="auto_input_text" type="text" name="samples" value={newTags.fontSams} disabled />
                </div>
                <button className="secondary_button mini-button" onClick={unselect}>Reset</button>
            </div>
            {display()}
        </>
    )
}
