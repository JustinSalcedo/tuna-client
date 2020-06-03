export default (state, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            return {
                ...state,
                sectionList: [...state.sectionList, action.payload]
            }
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'UPDATE_SECTIONS':
            let children = action.payload.filter(section => section.category)
            children = children.map(section => section.category)
            return {
                ...state,
                sectionList: action.payload,
                newModel: {
                    ...state.newModel,
                    children
                }
            }
        case 'ADD_DETAILS':
            return {
                ...state,
                newModel: {
                    ...state.newModel,
                    model: action.payload.model,
                    category: action.payload.category,
                    structure: action.payload.structure
                }
            }
        case 'RESET_STATE':            
            return {
                categories: state.categories,
                newModel: {
                    model: '',
                    children: [],
                    category: '',
                    structure: ''
                },
                sectionList: [],
                modalOn: false,
                renderOn: false,
                resetting: !state.resetting
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