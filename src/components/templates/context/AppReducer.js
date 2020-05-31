export default (state, action) => {
    switch(action.type) {
        case 'GET_MODELS':
            return {
                ...state,
                models: action.payload
            }
        case 'ADD_MODEL':
            return {
                ...state,
                newTemplate: { ...state.newTemplate, category: action.payload.category, structure: action.payload.structure },
                modelId: action.payload.id,
                newTags: { ...state.newTags, color: action.payload.color, font: action.payload.font }
            }
        case 'GET_SECTIONS':
            return {
                ...state,
                sections: action.payload
            }
        case 'UPDATE_SECTIONS':
            return {
                ...state,
                sectionList: action.payload
            }
        case 'CHECK_SECTIONS':
            return {
                ...state,
                fullSections: action.payload
            }
        case 'APPEND_SECTIONS':
            const children = state.sectionList.map(section => section.docId)
            return {
                ...state,
                newTemplate: {...state.newTemplate, children}
            }
        case 'GET_COLORS':
            return {
                ...state,
                colors: action.payload
            }
        case 'ADD_COLOR':
            return {
                ...state,
                newTemplate: { ...state.newTemplate, color: action.payload.id},
                newTags: { ...state.newTags, color: action.payload.name, colorSams: action.payload.samples}
            }
        case 'GET_FONTS':
            return {
                ...state,
                fonts: action.payload
            }
        case 'ADD_FONT':
            return {
                ...state,
                newTemplate: { ...state.newTemplate, font: action.payload.id},
                newTags: { ...state.newTags, font: action.payload.name, fontSams: action.payload.samples}
            }
        case 'ADD_DETAILS':
            const desc = (action.payload.description ? action.payload.description : "")
            return {
                ...state,
                newTemplate: { ...state.newTemplate, name: action.payload.name, description: desc}
            }
        case 'RESET_STATE':            
            return {
                models: state.models,
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
                renderOn: false
            }
        case 'SET_MODAL':
            return {
                ...state,
                modalOn: action.payload
            }
        case 'SET_RENDER':
            return {
                ...state,
                renderOn: action.payload
            }
        default:
            return state
    }
}