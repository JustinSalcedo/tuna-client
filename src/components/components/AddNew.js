import React, { useState } from 'react'

import { GlobalProvider } from './context/GlobalState'

import { SearchComponents } from './search_components/SearchComponents'
import { AddNodes } from './add_nodes/AddNodes'
import { AddPlaceholder } from './AddPlaceholder'
import { DetailsForm } from './DetailsForm'
import { Modal } from './Modal'

export const AddNew = () => {
    const [childrenType, setChildrenType] = useState(null)

    const displayChildren = () => {
        switch (childrenType) {
            case 'COMPONENTS':
                return (
                    <SearchComponents type={childrenType} />
                )
            case 'NODES':
                return (
                    <AddNodes type={childrenType} />
                )
            case 'PLACEHOLDER':
                return (
                    <AddPlaceholder type={childrenType} />
                )
            default:
                return (<></>)
        }
    }
    
    return (
        <GlobalProvider>
            <main className="main_dashboard container">
                <div className="row">
                    <section className="main_panel col-8">
                        <h1>Assemble the component</h1>
                        <div className="radio_group">
                            <input class="input_radio" type="radio" name="childrenType" 
                            onChange={() => setChildrenType('PLACEHOLDER')} />
                            <label>Placeholder</label>
                            <input class="input_radio" type="radio" name="childrenType"  
                            onChange={() => setChildrenType('COMPONENTS')} />
                            <label>Components</label>
                            <input class="input_radio" type="radio" name="childrenType"  
                            onChange={() => setChildrenType('NODES')} />
                            <label>Nodes</label>
                        </div>
                        {displayChildren()}
                    </section>
                    <section className="side_panel col-4">
                        <h1>Add component details</h1>
                        <DetailsForm />
                    </section>
                </div>
                <Modal />
            </main>
        </GlobalProvider>
    )
}
