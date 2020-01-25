import {CONTACTS_ERROR, CONTACTS_REQUEST, CONTACTS_SUCCESS, GET_CONTACTS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    contacts: [],
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case CONTACTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                contacts: action.contacts
            };
        default:
            return state;
    }
};
export default reducer;

