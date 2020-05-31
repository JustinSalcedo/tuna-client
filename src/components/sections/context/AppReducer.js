export default (state, action) => {
    switch(action.type) {
        case 'GET_COMPONENTS':
            return {
                ...state,
                components: action.payload
            }
        case 'UPDATE_COMPONENTS':
            let children = action.payload.filter(compo => compo.docId)
            children = children.map(compo => compo.docId)
            return {
                ...state,
                componentList: action.payload,
                newSection: {
                    ...state.newSection,
                    children
                }
            }
        case 'ADD_LAYOUT':
            return {
                ...state,
                newSection: {
                    ...state.newSection,
                    layout: action.payload.id
                },
                newTags: {
                    ...state.newTags,
                    layout: action.payload.name,
                    layoutTags: action.payload.tags
                }
            }
        case 'GET_LAYOUTS':
            return {
                ...state,
                layouts: action.payload
            }
        case 'ADD_DETAILS':
            const desc = action.payload.description ? action.payload.description : ''
            return {
                ...state,
                newSection: {
                    ...state.newSection,
                    category: action.payload.category,
                    tag: action.payload.tag,
                    description: desc
                }
            }
        case 'RESET_STATE':            
            return {
                components: state.components,
                newSection: {
                    category: '',
                    tag: '',
                    children: [],
                    layout: '',
                    description: ''
                },
                componentList: [],
                layouts: [],
                newTags: {
                    layout: '',
                    layoutTags: ''
                },
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