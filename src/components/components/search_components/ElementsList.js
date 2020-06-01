import React, { useContext} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { GlobalContext } from '../context/GlobalState'

import { Element } from './Element'

export const ElementsList = () => {
    const { componentList, updateComponents } = useContext(GlobalContext)

    const addField = () => {
        const newField = [
            ...componentList,
            { id: uuidv4(), type: '', tag: '' }
        ]
        updateComponents(newField)
    }
    
    return (
        <>
            {componentList.map(compoEle => (<Element key={compoEle.id} compoEle={compoEle}/>))}
            <div className="new_button">
                <button className="secondary_button mini-button" onClick={addField}>Add new field</button>
            </div>
        </>
    )
}
