

const reducer = (state, action) => {
    switch (action.type) {
        case 'SIGNUP': {
            return { ...state, currentUser: action.payload }
        }
        case 'SIGNIN': {
            return { ...state, currentUser: action.payload }

        }
        case 'SIGNOUT': {
            return { ...state, currentUser: null }
        }
        case 'ERROR': {
            return { ...state, error: action.payload }
        }

        default:
            return state;
    }
}

export default reducer