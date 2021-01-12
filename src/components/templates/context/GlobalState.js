import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    /* Initial State */
    models: [
        // { "id": 1, "model": "EssentialLocal", "children": ["header", "article", "footer"], "category": "Landing", "structure": "EPC"},
        // { "id": 2, "model": "Informational", "children": ["article", "footer", "productDive"], "category": "About", "structure": "EPC"},
        // { "id": 3, "model": "Presentation", "children": ["socialProof", "footer", "productDive"], "category": "About", "structure": "Slideshow"},
        // { "id": 4, "model": "NewProduct", "children": ["footer", "productDive"], "category": "Home", "structure": "Cover"},
        // { "id": 5, "model": "Catalogue", "children": ["socialProof", "header", "article"], "category": "Products", "structure": "Gallery"}
    ],
    sections: [],
    newTemplate: {
        name: '',
        description: '',
        children: [],
        category: '',
        structure: '',
        color: '',
        font: ''
    },
    sectionList: [],
    fullSections: false,
    colors: [],
    fonts: [],
    newTags: {
        color: '',
        colorSams: '',
        font: '',
        fontSams: ''
    },
    modelId: '',
    modalOn: false,
    renderOn: false,
    resetting: false


    /* Models done */
    // models: [
    //     { "id": 1, "model": "EssentialLocal", "children": ["header", "article", "footer"], "category": "Landing", "structure": "EPC"},
    //     { "id": 2, "model": "Informational", "children": ["article", "footer", "productDive"], "category": "About", "structure": "EPC"},
    //     { "id": 3, "model": "Presentation", "children": ["socialProof", "footer", "productDive"], "category": "About", "structure": "Slideshow"},
    //     { "id": 4, "model": "NewProduct", "children": ["footer", "productDive"], "category": "Home", "structure": "Cover"},
    //     { "id": 5, "model": "Catalogue", "children": ["socialProof", "header", "article"], "category": "Products", "structure": "Gallery"}
    // ],
    // sections: [
    //     { "id": 1, "category": "header", "tag": "header", "children": ["1", "2", "3"], "layout": "1", "description": "My towel is blue"},
    //     { "id": 2, "category": "article", "tag": "section", "children": ["5", "3", "4"], "layout": "2", "description": "My glass is also blue"},
    //     { "id": 3, "category": "footer", "tag": "footer", "children": ["9", "7", "8"], "layout": "3", "description": "But my other glass is red"},
    //     { "id": 4, "category": "productDive", "tag": "section", "children": ["3", "7", "6"], "layout": "4", "description": "It's hard to treat my deficit"},
    //     { "id": 5, "category": "socialProof", "tag": "section", "children": ["6", "5", "4"], "layout": "5", "description": "I need help"}
    // ],
    // newTemplate: {
    //     name: '',
    //     description: '',
    //     children: [],
    //     category: 'Landing',
    //     structure: 'EPC',
    //     color: '',
    //     font: ''
    // },
    // sectionList: [
    //     { category: "header", id: Math.floor(Math.random() * 100000000) },
    //     { category: "article", id: Math.floor(Math.random() * 100000000) },
    //     { category: "footer", id: Math.floor(Math.random() * 100000000) }
    // ],
    // fullSections: false,
    // colors: [],
    // fonts: [],
    // newTags: {
    //     color: '',
    //     colorSams: '',
    //     font: '',
    //     fontSams: ''
    // },
    // modelId: 1,
    // modalOn: false,
    // renderOn: false


    /* Sections done */
    // models: [
    //     { "id": 1, "model": "EssentialLocal", "children": ["header", "article", "footer"], "category": "Landing", "structure": "EPC"},
    //     { "id": 2, "model": "Informational", "children": ["article", "footer", "productDive"], "category": "About", "structure": "EPC"},
    //     { "id": 3, "model": "Presentation", "children": ["socialProof", "footer", "productDive"], "category": "About", "structure": "Slideshow"},
    //     { "id": 4, "model": "NewProduct", "children": ["footer", "productDive"], "category": "Home", "structure": "Cover"},
    //     { "id": 5, "model": "Catalogue", "children": ["socialProof", "header", "article"], "category": "Products", "structure": "Gallery"}
    // ],
    // sections: [
    //     { "id": 1, "category": "header", "tag": "header", "children": ["1", "2", "3"], "layout": "1", "description": "My towel is blue"},
    //     { "id": 2, "category": "article", "tag": "section", "children": ["5", "3", "4"], "layout": "2", "description": "My glass is also blue"},
    //     { "id": 3, "category": "footer", "tag": "footer", "children": ["9", "7", "8"], "layout": "3", "description": "But my other glass is red"},
    //     { "id": 4, "category": "productDive", "tag": "section", "children": ["3", "7", "6"], "layout": "4", "description": "It's hard to treat my deficit"},
    //     { "id": 5, "category": "socialProof", "tag": "section", "children": ["6", "5", "4"], "layout": "5", "description": "I need help"}
    // ],
    // newTemplate: {
    //     name: '',
    //     description: '',
    //     children: ["1", "2", "3"],
    //     category: 'Landing',
    //     structure: 'EPC',
    //     color: '',
    //     font: ''
    // },
    // sectionList: [
    //     { category: "header", id: Math.floor(Math.random() * 100000000), docId: "1" },
    //     { category: "article", id: Math.floor(Math.random() * 100000000), docId: "2" },
    //     { category: "footer", id: Math.floor(Math.random() * 100000000), docId: "3" }
    // ],
    // fullSections: true,
    // colors: [
    //     { "id": 1, "file": "I need to stick that poster", "name": "Bottle glass", "tags": ["matching", "wet", "emerald"], "samples": ["#7cbdc9", "#d0d0b8", "#afbaa3"] },
    //     { "id": 2, "file": "Lorem ipsum dolor sit amet,", "name": "Greece", "tags": ["beige", "brown", "coffee"], "samples": ["#dae8ec", "#dac5bc", "#b48464"] },
    //     { "id": 3, "file": "Maecenas rutrum augue mauri", "name": "Austere", "tags": ["minimal", "cold", "fall"], "samples": ["#4d3d5d", "#f00000", "#1a3b5c"] },
    //     { "id": 4, "file": "Vestibulum a sapien odio.", "name": "Boats", "tags": ["brown", "contrast", "ginger"], "samples": ["#3d677b", "#a6a7a3", "#d3c7b1"] },
    //     { "id": 5, "file": "Quisque eleifend vestibulum", "name": "Renovation", "tags": ["matching", "gold", "dark"], "samples": ["#b67929", "#a3acb1", "#3c5b74"] },
    //     { "id": 6, "file": "Nullam sagittis orci at neq", "name": "Dull", "tags": ["cyan", "cold", "greenery"], "samples": ["#487549", "#abba82", "#a7b5b7", "#037c87", "#102020"] },
    //     { "id": 7, "file": "Duis felis mi, venenatis ut", "name": "Ceramic", "tags": ["minimal", "brown", "matching", "coffe"], "samples": ["#1d0f0b", "#796d5d", "#baae97", "#a6a7a5"] },
    //     { "id": 8, "file": "Donec eros leo, tincidunt u", "name": "Baked", "tags": ["clay", "beige", "orange", "home"], "samples": ["#eb8b35", "#a43604"] },
    //     { "id": 9, "file": "Integer volutpat dolor eget", "name": "Banana", "tags": ["bright", "yellow", "pink"], "samples": ["#e55b7e", "#f6f5f0", "#f6da73", "#948f47", "#3e5336"] }
    // ],
    // fonts: [
    //     { "id": 1, "file": "I need to stick that poster", "name": "Formal", "tags": ["slab", "serif", "monotype"], "faces": ["calvert", "acumin"] },
    //     { "id": 2, "file": "Lorem ipsum dolor sit amet,", "name": "Writer", "tags": ["typewrite", "serif", "light"], "faces": ["montserrat", "courier"] },
    //     { "id": 3, "file": "Maecenas rutrum augue mauri", "name": "Newspaper", "tags": ["modern", "serif", "robust"], "faces": ["skolar latin", "proxima nova"] },
    //     { "id": 4, "file": "Vestibulum a sapien odio.", "name": "TextBlock", "tags": ["sans", "small", "caps", "robust"], "faces": ["alegreya sans", "source sans"] },
    //     { "id": 5, "file": "Quisque eleifend vestibulum", "name": "Tropical", "tags": ["brush", "sans", "display", "light", "hand"], "faces": ["pacifico", "quicksand"] },
    //     { "id": 6, "file": "Nullam sagittis orci at neq", "name": "Geometric", "tags": ["display", "caps", "sans", "stroke"], "faces": ["julius sans", "archivo narrow"] },
    //     { "id": 7, "file": "Duis felis mi, venenatis ut", "name": "Magazine", "tags": ["display", "serif", "elegant","print"], "faces": ["playfair display", "raleway"] },
    //     { "id": 8, "file": "Donec eros leo, tincidunt u", "name": "Alternate", "tags": ["stroke", "sans", "versatile"], "faces": ["oswald", "lato"] },
    //     { "id": 1, "file": "Integer volutpat dolor eget", "name": "LittleFancy", "tags": ["headline", "serif", "sans", "modern"], "faces": ["minion", "super grotesk"] }
    // ],
    // newTags: {
    //     color: '',
    //     colorSams: '',
    //     font: '',
    //     fontSams: ''
    // },
    // modelId: 1,
    // modalOn: false,
    // renderOn: false,
    // resetting: false


    /* Colors and fonts done */
    // models: [
    //     { "id": 1, "model": "EssentialLocal", "children": ["header", "article", "footer"], "category": "Landing", "structure": "EPC"},
    //     { "id": 2, "model": "Informational", "children": ["article", "footer", "productDive"], "category": "About", "structure": "EPC"},
    //     { "id": 3, "model": "Presentation", "children": ["socialProof", "footer", "productDive"], "category": "About", "structure": "Slideshow"},
    //     { "id": 4, "model": "NewProduct", "children": ["footer", "productDive"], "category": "Home", "structure": "Cover"},
    //     { "id": 5, "model": "Catalogue", "children": ["socialProof", "header", "article"], "category": "Products", "structure": "Gallery"}
    // ],
    // sections: [
    //     { "id": 1, "category": "header", "tag": "header", "children": ["1", "2", "3"], "layout": "1", "description": "My towel is blue"},
    //     { "id": 2, "category": "article", "tag": "section", "children": ["5", "3", "4"], "layout": "2", "description": "My glass is also blue"},
    //     { "id": 3, "category": "footer", "tag": "footer", "children": ["9", "7", "8"], "layout": "3", "description": "But my other glass is red"},
    //     { "id": 4, "category": "productDive", "tag": "section", "children": ["3", "7", "6"], "layout": "4", "description": "It's hard to treat my deficit"},
    //     { "id": 5, "category": "socialProof", "tag": "section", "children": ["6", "5", "4"], "layout": "5", "description": "I need help"},
    //     { "id": 6, "category": "header", "tag": "header", "children": ["1", "2", "3"], "layout": "5", "description": "Just checking repetition..."},
    // ],
    // newTemplate: {
    //     name: '',
    //     description: '',
    //     children: [1, 2, 3],
    //     category: 'Landing',
    //     structure: 'EPC',
    //     color: 5,
    //     font: 6
    // },
    // sectionList: [
    //     { category: "header", id: Math.floor(Math.random() * 100000000), docId: 1 },
    //     { category: "article", id: Math.floor(Math.random() * 100000000), docId: 2 },
    //     { category: "footer", id: Math.floor(Math.random() * 100000000), docId: 2 }
    // ],
    // fullSections: true,
    // colors: [
    //     { "id": 1, "file": "I need to stick that poster", "name": "Bottle glass", "tags": ["matching", "wet", "emerald"], "samples": ["#7cbdc9", "#d0d0b8", "#afbaa3"] },
    //     { "id": 2, "file": "Lorem ipsum dolor sit amet,", "name": "Greece", "tags": ["beige", "brown", "coffee"], "samples": ["#dae8ec", "#dac5bc", "#b48464"] },
    //     { "id": 3, "file": "Maecenas rutrum augue mauri", "name": "Austere", "tags": ["minimal", "cold", "fall"], "samples": ["#4d3d5d", "#f00000", "#1a3b5c"] },
    //     { "id": 4, "file": "Vestibulum a sapien odio.", "name": "Boats", "tags": ["brown", "contrast", "ginger"], "samples": ["#3d677b", "#a6a7a3", "#d3c7b1"] },
    //     { "id": 5, "file": "Quisque eleifend vestibulum", "name": "Renovation", "tags": ["matching", "gold", "dark"], "samples": ["#b67929", "#a3acb1", "#3c5b74"] },
    //     { "id": 6, "file": "Nullam sagittis orci at neq", "name": "Dull", "tags": ["cyan", "cold", "greenery"], "samples": ["#487549", "#abba82", "#a7b5b7", "#037c87", "#102020"] },
    //     { "id": 7, "file": "Duis felis mi, venenatis ut", "name": "Ceramic", "tags": ["minimal", "brown", "matching", "coffe"], "samples": ["#1d0f0b", "#796d5d", "#baae97", "#a6a7a5"] },
    //     { "id": 8, "file": "Donec eros leo, tincidunt u", "name": "Baked", "tags": ["clay", "beige", "orange", "home"], "samples": ["#eb8b35", "#a43604"] },
    //     { "id": 9, "file": "Integer volutpat dolor eget", "name": "Banana", "tags": ["bright", "yellow", "pink"], "samples": ["#e55b7e", "#f6f5f0", "#f6da73", "#948f47", "#3e5336"] }
    // ],
    // fonts: [
    //     { "id": 1, "file": "I need to stick that poster", "name": "Formal", "tags": ["slab", "serif", "monotype"], "faces": ["calvert", "acumin"] },
    //     { "id": 2, "file": "Lorem ipsum dolor sit amet,", "name": "Writer", "tags": ["typewrite", "serif", "light"], "faces": ["montserrat", "courier"] },
    //     { "id": 3, "file": "Maecenas rutrum augue mauri", "name": "Newspaper", "tags": ["modern", "serif", "robust"], "faces": ["skolar latin", "proxima nova"] },
    //     { "id": 4, "file": "Vestibulum a sapien odio.", "name": "TextBlock", "tags": ["sans", "small", "caps", "robust"], "faces": ["alegreya sans", "source sans"] },
    //     { "id": 5, "file": "Quisque eleifend vestibulum", "name": "Tropical", "tags": ["brush", "sans", "display", "light", "hand"], "faces": ["pacifico", "quicksand"] },
    //     { "id": 6, "file": "Nullam sagittis orci at neq", "name": "Geometric", "tags": ["display", "caps", "sans", "stroke"], "faces": ["julius sans", "archivo narrow"] },
    //     { "id": 7, "file": "Duis felis mi, venenatis ut", "name": "Magazine", "tags": ["display", "serif", "elegant","print"], "faces": ["playfair display", "raleway"] },
    //     { "id": 8, "file": "Donec eros leo, tincidunt u", "name": "Alternate", "tags": ["stroke", "sans", "versatile"], "faces": ["oswald", "lato"] },
    //     { "id": 1, "file": "Integer volutpat dolor eget", "name": "LittleFancy", "tags": ["headline", "serif", "sans", "modern"], "faces": ["minion", "super grotesk"] }
    // ],
    // newTags: {
    //     color: 'Renovation',
    //     colorSams: "#b67929, #a3acb1, #3c5b74",
    //     font: 'Geometric',
    //     fontSams: "julius sans, archivo narrow"
    // },
    // modelId: 1,
    // modalOn: false,
    // renderOn: false,
    // resetting: false
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function getModels(models) {
        dispatch({
            type: 'GET_MODELS',
            payload: models
        })
    }

    function addModel(model) {
        dispatch({
            type: 'ADD_MODEL',
            payload: model
        })
    }

    function getSections(sections) {
        dispatch({
            type: 'GET_SECTIONS',
            payload: sections
        })
    }

    function updateSections(sections) {
        dispatch({
            type: 'UPDATE_SECTIONS',
            payload: sections
        })
    }

    function checkSections(check) {
        dispatch({
            type: 'CHECK_SECTIONS',
            payload: check
        })
    }

    function appendSections() {
        dispatch({
            type: 'APPEND_SECTIONS'
        })
    }

    function getColors(colors) {
        dispatch({
            type: 'GET_COLORS',
            payload: colors
        })
    }

    function addColor(color) {
        dispatch({
            type: 'ADD_COLOR',
            payload: color
        })
    }

    function getFonts(fonts) {
        dispatch({
            type: 'GET_FONTS',
            payload: fonts
        })
    }

    function addFont(font) {
        dispatch({
            type: 'ADD_FONT',
            payload: font
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
        models: state.models,
        sections: state.sections,
        colors: state.colors,
        fonts: state.fonts,
        sectionList: state.sectionList,
        fullSections: state.fullSections,
        newTemplate: state.newTemplate,
        newTags: state.newTags,
        modelId: state.modelId,
        modalOn: state.modalOn,
        renderOn: state.renderOn,
        resetting: state.resetting,
        resetState,
        getModels,
        addModel,
        getSections,
        appendSections,
        updateSections,
        checkSections,
        getColors,
        addColor,
        getFonts,
        addFont,
        addDetails,
        setModal,
        setRender
    }}>
        {children}
    </GlobalContext.Provider>)
}