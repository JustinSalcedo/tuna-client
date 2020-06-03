export default (state, action) => {
    switch(action.type) {
        case 'UPLOAD_FILE':
            return {
                ...state,
                file: action.payload
            }
        case 'ADD_DETAILS':
            const desc = action.payload.description ? action.payload.description : ''
            return {
                ...state,
                newColor: {
                    ...state.newColor,
                    name: action.payload.name,
                    tags: action.payload.tags,
                    description: desc
                }
            }
        case 'RESET_STATE':            
            return {
                newColor: {
                    name: '',
                    tags: [],
                    samples: [],
                    description: ''
                },
                file: null,
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
        case 'SET_SAMPLES':
            return {
                ...state,
                newColor: { ...state.newColor, samples: action.payload }
            }
        default:
            return state
    }
}