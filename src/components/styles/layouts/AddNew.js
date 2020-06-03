import React from 'react'

import { GlobalProvider} from './context/GlobalState'

import { UploadFile } from './UploadFile'
import { DetailsForm } from './DetailsForm'
import { Modal } from './Modal'

export const AddNew = () => {
    return (
        <GlobalProvider>
            <main className="main_dashboard container">
                <div className="row">
                    <section className="main_panel col-8">
                        <UploadFile />
                    </section>
                    <section className="side_panel col-4">
                        <h1>Add layout details</h1>
                        <DetailsForm />
                    </section>
                </div>
                <Modal />
            </main>
        </GlobalProvider>
    )
}
