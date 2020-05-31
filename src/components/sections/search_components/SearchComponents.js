import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState'

import { ElementsList } from './ElementsList'
import { SearchLayout } from '../search_layout/SearchLayout'

export const SearchComponents = () => {
    const { newSection } = useContext(GlobalContext)
    
    const verifier = () => {
        const children = newSection.children.length !== 0
        if (children) {
			return (
				<div className="submit_buttons">
                    <div className="row">
                        <Link to="search_layout">
                            <button className="btn primary_button"
                            onClick={SearchLayout} >Continue >>></button>
                        </Link>
                    </div>
				</div>
			)
		}
    }
    
    return (
        <>
            <h1>Append components</h1>
            <ElementsList />
            {verifier()}
        </>
    )
}
