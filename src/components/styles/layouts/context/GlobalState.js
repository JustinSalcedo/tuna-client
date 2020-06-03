import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    /* Initial State */
    newLayout: {
        name: '',
        tags: [],
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

    return (<GlobalContext.Provider value={{
        newLayout: state.newLayout,
        file: state.file,
        modalOn: state.modalOn,
        renderOn: state.renderOn,
        resetting: state.resetting,
        uploadFile,
        resetState,
        addDetails,
        setModal,
        setRender
    }}>
        {children}
    </GlobalContext.Provider>)
}