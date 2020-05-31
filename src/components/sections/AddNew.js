import React from 'react'
import { Route } from 'react-router-dom'

import { GlobalProvider} from './context/GlobalState'

import { SearchComponents } from './search_components/SearchComponents'
import { SearchLayout } from './search_layout/SearchLayout'
import { DetailsForm } from './DetailsForm'
import { Modal } from './Modal'

export const AddNew = ({ match }) => {
    return (
        <GlobalProvider>
            <main className="main_dashboard container">
                <div className="row">
                    <section className="main_panel col-8">
                        <Route path={match.url + "/search_components"} component={SearchComponents}/>
                        <Route path={match.url + "/search_layout"} component={SearchLayout}/>
                    </section>
                    <section className="side_panel col-4">
                        <h1>Add section details</h1>
                        <DetailsForm />
                    </section>
                </div>
                <Modal />
            </main>
        </GlobalProvider>
    )
}
