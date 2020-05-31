import React, { useContext} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { GlobalContext } from '../context/GlobalState'

import { Element } from './Element'

export const ElementsList = () => {
    const { sectionList, updateSections } = useContext(GlobalContext)

    const addField = () => {
        const newField = [
            ...sectionList,
            { id: uuidv4(), category: '' }
        ]
        updateSections(newField)
    }
    
    return (
        <>
            {sectionList.map(section => (<Element key={section.id} section={section}/>))}
            <div className="new_button">
                <button className="secondary_button mini-button" onClick={addField}>Add new field</button>
            </div>
        </>
    )
}
