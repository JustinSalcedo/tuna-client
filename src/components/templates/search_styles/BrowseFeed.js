import React, { useState } from 'react'
import axios from 'axios'

import { BrowseTable } from './BrowseTable'

export const BrowseFeed = ({ styles, getStyles, tagging, addStyle, urlPost }) => {

    const [name, setName] = useState('')
    const [tags, setTags] = useState('')
    const [samples, setsamples] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()

        let dataPost = {}
        dataPost["tags"] = tags ? tags.split(",").map(tag => tag.trim()) : []
        dataPost[tagging[1]] = samples ? samples.split(",").map(sample => sample.trim()) : []
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
                <form id="formStyles" onSubmit={onSubmit}>
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
                    <div className="input_group">
                        <label htmlFor="samples">{tagging[0]}</label>
                        <input className="input_text" type="text" name="samples" value={samples} 
                        onChange={e => setsamples(e.target.value)} />
                    </div>
                    <button className="primary_button">Browse</button>
                </form>
            </div>
            <div className="new_button">
                <button className="primary_button">Add new</button>
            </div>
            <BrowseTable styles={styles} tagging={tagging} addStyle={addStyle} />
        </>
    )
}
