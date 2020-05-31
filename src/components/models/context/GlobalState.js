import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    /* Initial State */
    categories: [
        { "_id": "header", "count": 4 },
        { "_id": "article", "count": 2 },
        { "_id": "footer", "count": 6 },
        { "_id": "productDive", "count": 1 },
        { "_id": "socialProof", "count": 9 }
    ],
    newModel: {
        model: '',
        children: [],
        category: '',
        structure: ''
    },
    sectionList: [],
    modalOn: false,
    renderOn: false


    /* Categories done */
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function addCategory(category) {
        dispatch({
            type: 'ADD_CATEGORY',
            payload: category
        })
    }

    function getCategories(categories) {
        dispatch({
            type: 'GET_CATEGORIES',
            payload: categories
        })
    }

    function updateSections(sections) {
        dispatch({
            type: 'UPDATE_SECTIONS',
            payload: sections
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
        categories: state.categories,
        newModel: state.newModel,
        sectionList: state.sectionList,
        modalOn: state.modalOn,
        renderOn: state.renderOn,
        resetState,
        addCategory,
        getCategories,
        updateSections,
        addDetails,
        setModal,
        setRender
    }}>
        {children}
    </GlobalContext.Provider>)
}