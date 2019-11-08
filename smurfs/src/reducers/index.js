import {ADD_SMURF, START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';

const initialState = {
    smurfData: [],
    isFetching: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_SMURF:
            return {
                ...state,
                smurfData: [...state.smurfData, action.payload]
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
                smurfData: [...state.smurfData, action.payload],
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