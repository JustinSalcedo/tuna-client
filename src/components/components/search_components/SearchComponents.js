import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { ElementsList } from './ElementsList'

export const SearchComponents = ({ type }) => {
    
    const { setChildrenType, childrenType } = useContext(GlobalContext)

    if(childrenType !== type) { setChildrenType(type) }
    
    return (
        <>
            <h1>Append components</h1>
            <ElementsList />
        </>
    )
}
