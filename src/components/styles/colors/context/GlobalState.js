import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    /* Initial State */
    newColor: {
        name: '',
        tags: [],
        samples: [],
        description: ''
    },
    file: null,
    modalOn: false,
    renderOn: false,
    resetting: false


    /* Categories done */
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function uploadFile(file) {
        dispatch({
            type: 'UPLOAD_FILE',
            payload: file
        })
    }

    function addDetails(details) {
        dispatch({
            type: 'ADD_DETAILS',
            payload: details
        })
    }

    function resetState() {
        dispatch({
            type: 'RESET_STATE'
        })
    }

    function setModal(status) {
        dispatch({
            type: 'SET_MODAL',
            payload: status
        })
    }

    function setRender(status) {
        dispatch({
            type: 'SET_RENDER',
            payload: status
        })
    }

    function setSamples(samples) {
        dispatch({
            type: 'SET_SAMPLES',
            payload: samples
        })
    }

    return (<GlobalContext.Provider value={{
        newColor: state.newColor,
        file: state.file,
        modalOn: state.modalOn,
        renderOn: state.renderOn,
        resetting: state.resetting,
        uploadFile,
        resetState,
        addDetails,
        setModal,
        setRender,
        setSamples
    }}>
        {children}
    </GlobalContext.Provider>)
}