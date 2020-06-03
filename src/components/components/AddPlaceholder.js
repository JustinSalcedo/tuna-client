import React, { useContext } from 'react'

import { GlobalContext } from './context/GlobalState'

export const AddPlaceholder = ({ type }) => {
    
    const { setPlaceholder, childrenType, setChildrenType } = useContext(GlobalContext)

    if(childrenType !== type) { setChildrenType(type) }

    return (
        <>
            <h1>Add placeholder</h1>
            <div className="browse_feed">
                <form>
                    <div className="input_group">
                        <input className="input_text input-short" type="text" name="tag"
                        onChange={e => setPlaceholder(e.target.value)}/>
                    </div>
                </form>
            </div>
        </>
    )
}
