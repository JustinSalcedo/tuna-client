import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    /* Initial State */
    components: [
        // { "_id": 1, "type": "navbar", "tag": "nav", "children": ["2", "3", "4"], "description": "My towel is blue"},
        // { "_id": 2, "type": "current_hours", "tag": "div", "nodes": ["p", "span"], "description": "Useful with Vanilla Javascript"},
        // { "_id": 3, "type": "secondary_button", "tag": "button", "placeholder": "secondary_button", "description": "I would like to buy cookies"},
        // { "_id": 4, "type": "primary_buttons", "tag": "button", "placeholder": "primary_button", "description": "But I can't it so much flour"},
        // { "_id": 5, "type": "header_content", "tag": "div", "children": ["6", "7", "8"], "description": "That's one of my fitness secrets"},
        // { "_id": 6, "type": "header_text", "tag": "div", "nodes": ["h1", "h2", "p"], "description": "We stack threee types of text"},
        // { "_id": 7, "type": "header_image", "tag": "div", "nodes": ["img"], "description": "I know, you want to go out..."},
        // { "_id": 8, "type": "operational_hours", "tag": "div", "nodes": ["h2", "p", "span"], "description": "Mamaaaaaaa"},
        // { "_id": 9, "type": "useful_links", "tag": "ul", "nodes": ["li", "li", "li", "li"], "description": "This has to work"}
    ],
    newSection: {
        category: '',
        tag: '',
        children: [],
        layout: '',
        description: ''
    },
    newTags: {
        layout: '',
        layoutTags: ''
    },
    layouts: [],
    componentList: [],
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
    function getComponents(components) {
        dispatch({
            type: 'GET_COMPONENTS',
            payload: components
        })
    }

    function updateComponents(components) {
        dispatch({
            type: 'UPDATE_COMPONENTS',
            payload: components
        })
    }

    function addLayout(layout) {
        dispatch({
            type: 'ADD_LAYOUT',
            payload: layout
        })
    }

    function getLayouts(layouts) {
        dispatch({
            type: 'GET_LAYOUTS',
            payload: layouts
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
        components: state.components,
        newSection: state.newSection,
        componentList: state.componentList,
        newTags: state.newTags,
        layouts: state.layouts,
        modalOn: state.modalOn,
        renderOn: state.renderOn,
        resetting: state.resetting,
        resetState,
        getComponents,
        updateComponents,
        addLayout,
        getLayouts,
        addDetails,
        setModal,
        setRender
    }}>
        {children}
    </GlobalContext.Provider>)
}