import {
    CONTACTS_ERROR,
    CONTACTS_REQUEST,
    CONTACTS_SUCCESS,
    GET_CONTACT_SUCCESS,
    GET_CONTACTS_SUCCESS,
    CLOSE_MODAL_HANDLER, GET_CONTACT_ID
} from "./actionTypes";
import axiosContacts from "../../axios-contacts";

export const contactsRequest = () => ({type: CONTACTS_REQUEST});
export const contactsSuccess = () => ({type: CONTACTS_SUCCESS});
export const contactsError = error => ({type: CONTACTS_ERROR, error});

export const getContactsSuccess = (contacts) => ({type: GET_CONTACTS_SUCCESS, contacts});

export const getContactSuccess = (id) => ({type: GET_CONTACT_SUCCESS, id});

export const closeModalHandler = () => ({type: CLOSE_MODAL_HANDLER});

export const getContactId = (id) => ({type: GET_CONTACT_ID, id});


export const addContact = contact => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            await axiosContacts.post('/contacts.json', contact);
            dispatch(contactsSuccess());
        } catch (e) {
            dispatch(contactsError(e));
        }
    }
};

export const removeContact = contact => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            await axiosContacts.delete('/contacts/' + contact + '.json');
            const response = await axiosContacts.get('/contacts.json');
            const contacts = response.data;
            dispatch(getContactsSuccess(contacts));
        } catch (e) {
            dispatch(contactsError(e));
        }
    }
};

export const getContacts = () => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            const response = await axiosContacts.get('/contacts.json');
            const contacts = response.data;
            dispatch(getContactsSuccess(contacts));
        } catch (e) {
            contactsError(e);
        }
    }
};


export const getContact = id => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            dispatch(getContactId(id));
            const response = await axiosContacts.get('/contacts/' + id + '.json');
            const contact = response.data;
            dispatch(getContactSuccess(contact));
        } catch (e) {
            dispatch(contactsError(e));
        }
    }
};
