const initialState = {
    message: 'No dog is there',
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'successShortenURL' :
            return {
                ...state, 
                url: action.url
            }
        case 'loadingAction':
            return {
                ...state,
                loading: true,
            }
        case 'returnShortenURL':
            return {
                ...state,
                shortenedURL: action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;