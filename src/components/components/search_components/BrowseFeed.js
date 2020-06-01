import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { BrowseTable } from './BrowseTable'

export const BrowseFeed = ({ compoEle }) => {
    const { getComponents } = useContext(GlobalContext)

    const [type, setType] = useState('')
    const [tag, setTag] = useState('')
    const [children, setChildren] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()

        const keywordsString = {type, tag, children}
        submitSimulation(keywordsString)
            .then(data => getComponents(data))
    }

    const submitSimulation = keyArray => {
        return new Promise((resolve, reject) => {
            if(keyArray) {
                const newArray = [
                    { "_id": 1, "type": "navbar", "tag": "nav", "children": ["2", "3", "4"], "description": "My towel is blue"},
                    { "_id": 2, "type": "current_hours", "tag": "div", "nodes": ["p", "span"], "description": "Useful with Vanilla Javascript"},
                    { "_id": 3, "type": "secondary_button", "tag": "button", "placeholder": "secondary_button", "description": "I would like to buy cookies"},
                    { "_id": 4, "type": "primary_buttons", "tag": "button", "placeholder": "primary_button", "description": "But I can't it so much flour"},
                    { "_id": 5, "type": "header_content", "tag": "div", "children": ["6", "7", "8"], "description": "That's one of my fitness secrets"}
                ]
                resolve (newArray)
            } else reject('Ooooooppppssss!')
        })
    }

    return (
        <>
            <div className="browse_feed">
                <form onSubmit={onSubmit}>
                    <div className="input_group">
                        <label htmlFor="children">Type</label>
                        <input className="input_text input-short" type="text" name="type" value={type} 
                        onChange={e => setType(e.target.value)}/>
                    </div>
                    <div className="input_group">
                        <label htmlFor="children">Tag</label>
                        <input className="input_text input-short" type="text" name="tag" value={tag} 
                        onChange={e => setTag(e.target.value)}/>
                    </div>
                    <div className="input_group">
                        <label htmlFor="children">Children</label>
                        <select class="input_select input-short" name="children"
                        onChange={e => setChildren(e.target.value)}>
                          <option value="placeholder">Placeholder</option>
                          <option value="components">Components</option>
                          <option value="nodes">Nodes</option>
                        </select>
                    </div>
                    <button className="btn primary_button">Browse</button>
                </form>
            </div>
            <BrowseTable compoEle={compoEle}/>
        </>
    )
}
