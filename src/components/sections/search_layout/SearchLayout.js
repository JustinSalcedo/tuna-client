import React from 'react'
import { Link } from 'react-router-dom'

import { LayoutElement } from './LayoutElement'

export const SearchLayout = () => {
    return (
        <>
            <h1>Choose the layout</h1>
            <LayoutElement />
            <div className="center_button">
                <Link to="search_components">
                    <button className="btn secondary_button">{"<<<Go back"}</button>
                </Link>
            </div>
        </>
    )
}
