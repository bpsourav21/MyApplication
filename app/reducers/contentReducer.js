export default function reducer(state = {
    authenticating: false,
}, action) {
    switch (action.type) {
        // ------------------------------------------------------------------
        case "LOGIN": {
            return {
                ...state,
                authenticating: true
            }
        }
        default:
            return state
    }
}