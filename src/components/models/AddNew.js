import React from 'react'
import { Route } from 'react-router-dom'

import { GlobalProvider} from './context/GlobalState'

import { SearchCategories } from './search_categories/SearchCategories'
import { DetailsForm } from './DetailsForm'
import { Modal } from './Modal'

export const AddNew = ({ match }) => {
    return (
        <GlobalProvider>
            <main className="main_dashboard container">
                <div className="row">
                    <section className="main_panel col-8">
                        <Route path={match.url + "/search_categories"} component={SearchCategories}/>
                    </section>
                    <section className="side_panel col-4">
                        <h1>Add model details</h1>
                        <DetailsForm />
                    </section>
                </div>
                <Modal />
            </main>
        </GlobalProvider>
    )
}
