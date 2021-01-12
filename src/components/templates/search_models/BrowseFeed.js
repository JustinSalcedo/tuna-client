import React, { useState, useContext } from 'react'
import axios from 'axios'

import { GlobalContext } from '../context/GlobalState'

export const BrowseFeed = () => {
    const { getModels } = useContext(GlobalContext)
    
    const [category, setCategory] = useState('')
    const [structure, setStructure] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()

        // const newRequest = { category, structure }
        // const models = [
        //     { id: 20, model: "hulu", children: ["lulu", "lala", "lele"], category: "Products", structure: "Gallery"}
        // ]
        // getModels(models)

        // axios.get(`http://127.0.0.1:3001/models/search?category=${category}&structure=${structure}`)
        //     .then(res => getModels(res.body))

        let url = "http://127.0.0.1:3001/models/search"

        if(category) {
            url = url + `?category=${category}`
            if(structure) {
                url = url + `&structure=${structure}`
            }
        }

        if(structure) {
            url = url + `?structure=${structure}`
            if(category) {
                url = url + `&category=${category}`
            }
        }

        axios.get(url)
            .then(res => {
                const data = res.data.body
                getModels(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="browse_feed">
            <form onSubmit={onSubmit}>
                <div className="input_group">
                    <label htmlFor="category">Category</label>
                    <input className="input_text" type="text" name="category" value={category} 
                    onChange={e => setCategory(e.target.value)}/>
                </div>
                <div className="input_group">
                    <label htmlFor="structure">Structure</label>
                    <input className="input_text" type="text" name="structure" value={structure} 
                    onChange={e => setStructure(e.target.value)}/>
                </div>
                <button className="btn primary_button">Browse</button>
            </form>
        </div>
    )
}
