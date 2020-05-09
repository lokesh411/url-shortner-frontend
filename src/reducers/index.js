const initialState = {
    message: 'No dog is there',
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_DOG_SUCCEEDED':
            return {
                ...state,
                imageUrl: action.url,
                message: 'here is the dog'
            }
        case 'REQUESTED_DOG':
            return {
                ...state,
                loading: true,
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;