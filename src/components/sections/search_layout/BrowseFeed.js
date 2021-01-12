import React, { useState } from 'react'
import axios from 'axios'

import { BrowseTable } from './BrowseTable'

export const BrowseFeed = ({ styles, getStyles, addStyle, urlPost }) => {

    const [name, setName] = useState('')
    const [tags, setTags] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()

        let dataPost = {}
        dataPost["tags"] = tags ? tags.split(",").map(tag => tag.trim()) : []
        if(name) { dataPost["name"] = name }

        axios.post(urlPost, dataPost)
            .then(res => {
                const data = res.data.body
                getStyles(data)
            })
            .catch(err => {
                console.log(err)
                console.log(dataPost)
            })
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
