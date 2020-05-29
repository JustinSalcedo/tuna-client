import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { BrowseTable } from './BrowseTable'

export const BrowseFeed = ({ sectionCategory }) => {
    const { sections } = useContext(GlobalContext)
    
    const [filteredSections, filterSections] = useState(sections.filter(section => {
        return (sectionCategory.category === section.category)
    }))
    const [children, setChildren] = useState('')
    const [layout, setLayout] = useState('')

    const compareArrays = (target, filter) => {
        const result = filter.map(item => {
            let light = false
            for (let i = 0; i < target.length; i++) {
                if (item === target[i]) {
                    light = true
                    console.log(light)
                    break
                }
                
            }
            return light
        })

        const reducer = (accumulator, currentValue) => accumulator && currentValue
        return result.reduce(reducer)
    }
    
    const onSubmit = e => {
        e.preventDefault()

        const newSections = sections.filter(section => {
            let light = (sectionCategory.category === section.category)
            if (light && layout) {
                light = light && (layout.trim() === section.layout)
            }
            if (light && children) {
                const childrenFilter = children.split(",").map(word => word.trim())
                const childrenTarget = section.children
                light = light && compareArrays(childrenTarget, childrenFilter)
            }
            return light
        })

        filterSections(newSections)
    }

    return (
        <>
            <div className="browse_feed">
                <form onSubmit={onSubmit}>
                    <div className="input_group">
                        <label htmlFor="children">Children</label>
                        <input className="input_text" type="text" name="children" value={children} 
                        onChange={e => setChildren(e.target.value)}/>
                    </div>
                    <div className="input_group">
                        <label htmlFor="layout">Layout</label>
                        <input className="input_text" type="text" name="layout" value={layout} 
                        onChange={e => setLayout(e.target.value)}/>
                    </div>
                    <button className="btn primary_button">Filter</button>
                </form>
            </div>
            <BrowseTable category={sectionCategory} filteredSections={filteredSections}/>
        </>
    )
}
