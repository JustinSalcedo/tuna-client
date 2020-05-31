import React from 'react'
import { Route, Link } from 'react-router-dom'

import { AddNew } from './AddNew'

export const SectionDashboard = ({ match }) => {
    return (
        <>
            <Route exact path={match.url} render={() => (
                <main className="main_dashboard container">
                    <div className="row">
                        <section className="main_panel col-8 offset-2">
                            <div className="center_button">
                                <Link to={match.url + "/add/search_components"}>
                                    <button className="btn primary_button">Add New</button>
                                </Link>
                            </div>
                        </section>
                    </div>
                </main>
            )} />
            <Route path={match.url + "/add"} component={AddNew} />
        </>
    )
}
