import {START_POSTING, POST_SUCCESS, POST_FAILURE, START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';

const initialState = {
    smurfData: [],
    isFetching: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case POST_SUCCESS:
            return {
                ...state,
                smurfData: action.payload,
                error: ''
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfData: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}