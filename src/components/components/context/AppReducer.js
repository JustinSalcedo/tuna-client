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
                newComponent: {
                    ...state.newComponent,
                    children
                }
            }
        case 'UPDATE_NODES':
            let nodes = action.payload.filter(node => node.tag)
            nodes = nodes.map(node => node.tag)
            return {
                ...state,
                newComponent: {
                    ...state.newComponent,
                    nodes
                }
            }
        case 'ADD_DETAILS':
            const desc = action.payload.description ? action.payload.description : ''
            return {
                ...state,
                newComponent: {
                    ...state.newComponent,
                    type: action.payload.type,
                    tag: action.payload.tag,
                    description: desc
                }
            }
        case 'RESET_STATE':            
            return {
                components: state.components,
                newComponent: {
                    type: '',
                    tag: '',
                    children: [],
                    nodes: [],
                    placeholder: '',
                    description: ''
                },
                componentList: [],
                modalOn: false,
                renderOn: false,
                childrenType: null,
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
        case 'SET_CHILDRENTYPE':
            return {
                ...state,
                childrenType: action.payload
            }
        case 'SET_PLACEHOLDER':
            return {
                ...state,
                newComponent: { ...state.newComponent, placeholder: action.payload }
            }
        default:
            return state
    }
}