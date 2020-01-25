import {
    CONTACTS_ERROR,
    CONTACTS_REQUEST,
    CONTACTS_SUCCESS,
    GET_CONTACT_SUCCESS,
    GET_CONTACTS_SUCCESS,
    CLOSE_MODAL_HANDLER, GET_CONTACT_ID
} from "../actions/actionTypes";

const initialState = {
    contacts: [],
    contact: [],
    loading: false,
    show: false,
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
                show: false,
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
                show: false,
                contacts: action.contacts
            };
        case GET_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                show: true,
                contact: action.id,
            };
        case CLOSE_MODAL_HANDLER:
            return {
                ...state,
                show: false
            };
        case GET_CONTACT_ID:
            return {
                ...state,
                id: action.id
            };
        default:
            return state;
    }
};
export default reducer;

