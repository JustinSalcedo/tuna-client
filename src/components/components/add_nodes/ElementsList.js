import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Element } from './Element'

export const ElementsList = ({ nodeFields, setNodeFields }) => {

    const addField = () => {
        const newField = [
            ...nodeFields,
            { id: uuidv4(), tag: '' }
        ]
        setNodeFields(newField)
    }
    
    return (
        <>
            {nodeFields.map(nodeField => (<Element key={nodeField.id} nodeField={nodeField}
            nodeFields={nodeFields} setNodeFields={setNodeFields} />))}
            <div className="new_button">
                <button className="secondary_button mini-button" onClick={addField}>Add new field</button>
            </div>
        </>
    )
}
