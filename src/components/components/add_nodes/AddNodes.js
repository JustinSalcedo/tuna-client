import React, { useContext, useState } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { ElementsList } from './ElementsList'

export const AddNodes = ({ type }) => {
    
    const { setChildrenType, childrenType } = useContext(GlobalContext)

    const [nodeFields, setNodeFields] = useState([])

    if(childrenType !== type) { setChildrenType(type) }

    return (
        <>
            <h1>Add nodes</h1>
            <ElementsList nodeFields={nodeFields} setNodeFields={setNodeFields} />
        </>
    )
}
