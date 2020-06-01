import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const BrowseFeed = ({ nodeField, setNodeFields, nodeFields }) => {
    const { updateNodes } = useContext(GlobalContext)

    const [tag, setTag] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()

        if(tag) {
            const newNodeFields = nodeFields.map(field => {
                if(field.id === nodeField.id) {
                    return { ...field, tag }
                } else return field
            })
            setNodeFields(newNodeFields)
            updateNodes(newNodeFields)
        }
    }

    return (
        <>
            <div className="browse_feed">
                <form onSubmit={onSubmit}>
                    <div className="input_group">
                        <label htmlFor="children">Tag</label>
                        <input className="input_text input-short" type="text" name="tag" value={tag} 
                        onChange={e => setTag(e.target.value)}/>
                    </div>
                    <button className="btn primary_button">Add</button>
                </form>
            </div>
        </>
    )
}
