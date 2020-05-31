import React, { useState } from 'react'

import { BrowseTable } from './BrowseTable'

export const BrowseFeed = ({ styles, getStyles, stylesList, addStyle }) => {

    const [name, setName] = useState('')
    const [tags, setTags] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()

        getStyles(stylesList)
    }

    return (
        <>
            <div className="browse_feed">
                <form onSubmit={onSubmit}>
                    <div className="input_group">
                        <label htmlFor="name">Name</label>
                        <input className="input_text" type="text" name="name" value={name} 
                        onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input_group">
                        <label htmlFor="tags">Tags</label>
                        <input className="input_text" type="text" name="tags" value={tags} 
                        onChange={e => setTags(e.target.value)} />
                    </div>
                    <button className="primary_button">Browse</button>
                </form>
            </div>
            <BrowseTable styles={styles} addStyle={addStyle} />
        </>
    )
}
