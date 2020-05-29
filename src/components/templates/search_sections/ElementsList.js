import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Element } from './Element'

export const ElementsList = () => {
    const { sectionList } = useContext(GlobalContext)
    
    return (
        <>
            {sectionList.map(section => (<Element key={section.id} section={section}/>))}
        </>
    )
}
