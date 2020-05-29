import React from 'react'
import { Route } from 'react-router-dom'

import { GlobalProvider} from './context/GlobalState'

import { SearchModel } from './search_models/SearchModel'
import { SearchSections } from './search_sections/SearchSections'
import { SearchStyles } from './search_styles/SearchStyles'
import { DetailsForm } from './DetailsForm'
import { Modal } from './Modal'

export const AddNew = ({ match }) => {
    return (
        <GlobalProvider>
            <main className="main_dashboard container">
                <div className="row">
                    <section className="main_panel col-8">
                        <Route path={match.url + "/search_models"} component={SearchModel}/>
                        <Route path={match.url + "/search_sections"} component={SearchSections}/>
                        <Route path={match.url + "/search_styles"} component={SearchStyles}/>
                    </section>
                    <section className="side_panel col-4">
                        <h1>Add template details</h1>
                        <DetailsForm />
                    </section>
                </div>
                <Modal />
            </main>
        </GlobalProvider>
    )
}
