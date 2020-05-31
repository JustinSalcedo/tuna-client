import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { BrowseTable } from './BrowseTable'

export const BrowseFeed = ({ section }) => {
    const { getCategories } = useContext(GlobalContext)

    const [keywords, setKeywords] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()

        let keywordsString = keywords.split(",")
        keywordsString = keywordsString.map(word => word.trim())
        submitSimulation(keywordsString)
            .then(data => getCategories(data))
    }

    const submitSimulation = keyArray => {
        return new Promise((resolve, reject) => {
            if(keyArray) {
                const newArray = [
                    { "_id": "header", "count": 4 },
                    { "_id": "article", "count": 2 },
                    { "_id": "footer", "count": 6 }
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
                        <label htmlFor="children">Keywords</label>
                        <input className="input_text" type="text" name="keywords" value={keywords} 
                        onChange={e => setKeywords(e.target.value)}/>
                    </div>
                    <button className="btn primary_button">Explore</button>
                </form>
            </div>
            <BrowseTable section={section}/>
        </>
    )
}
