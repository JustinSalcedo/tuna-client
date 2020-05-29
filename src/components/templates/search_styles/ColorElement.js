import React, { useState, useContext } from 'react'

import { BrowseFeed } from './BrowseFeed'

import { GlobalContext } from '../context/GlobalState'

export const ColorElement = () => {
    const { newTags, addColor, colors, getColors } = useContext(GlobalContext)

    const [dropdown, setDropdown] = useState(false)

    // Dummy list
    const [stylesList, setStylesList] = useState([
        { id: 4, file: "Vestibulum a sapien odio.", name: "Boats", tags: ["brown", "contrast", "ginger"], samples: ["#3d677b", "#a6a7a3", "#d3c7b1"] },
        { id: 5, file: "Quisque eleifend vestibulum", name: "Renovation", tags: ["matching", "gold", "dark"], samples: ["#b67929", "#a3acb1", "#3c5b74"] },
        { id: 6, file: "Nullam sagittis orci at neq", name: "Dull", tags: ["cyan", "cold", "greenery"], samples: ["#487549", "#abba82", "#a7b5b7", "#037c87", "#102020"] },
        { id: 7, file: "Duis felis mi, venenatis ut", name: "Ceramic", tags: ["minimal", "brown", "matching", "coffe"], samples: ["#1d0f0b", "#796d5d", "#baae97", "#a6a7a5"] }
    ])

    const unselect = () => {
		const newColor = {
            id: '',
            name: '',
            samples: ''
        }

		addColor(newColor)
	}

    const display = () => {
        if (dropdown) {
            return (
                <>
                    <BrowseFeed styles={colors} getStyles={getColors} stylesList={stylesList} 
                    tagging={["Samples (HEX)", "samples", "color"]} addStyle={addColor} />
                </>
            )
        }
    }
    
    return (
        <>
            <div className="elements_list" onClick={() => setDropdown(!dropdown)} >
                <div className="auto_input_group">
                    <input className="auto_input_text" type="text" name="name" value={newTags.color} disabled />
                </div>
                <div className="auto_input_group">
                    <label htmlFor="samples">Samples:</label>
                    <input className="auto_input_text" type="text" name="samples" value={newTags.colorSams} disabled />
                </div>
                <button className="secondary_button mini-button" onClick={unselect}>Reset</button>
            </div>
            {display()}
        </>
    )
}
