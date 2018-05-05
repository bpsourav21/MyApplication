export default function reducer(state = {
    getAllContents: [],
}, action) {
    switch (action.type) {
        // ------------------------------------------------------------------
        case "GET_ALL_CONTENTS": {
            return {
                ...state,
                getAllContents: action.payload.getAllContents
            }
        }
        default:
            return state
    }
}