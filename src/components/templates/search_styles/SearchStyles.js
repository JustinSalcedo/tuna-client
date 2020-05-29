import React from 'react'
import { Link } from 'react-router-dom'

import { ColorElement } from './ColorElement'
import { FontElement } from './FontElement'

export const SearchStyles = () => {
    return (
        <>
            <h1>Choose the color palette</h1>
            <ColorElement />
            <h1>Choose the font pairing</h1>
            <FontElement />
            <div className="center_button">
                <Link to="search_sections">
                    <button className="btn secondary_button">{"<<<Go back"}</button>
                </Link>
            </div>
        </>
    )
}
