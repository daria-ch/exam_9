import {CONTACTS_ERROR, CONTACTS_REQUEST, CONTACTS_SUCCESS, GET_CONTACTS_SUCCESS} from "./actionTypes";
import axiosContacts from "../../axios-contacts";

export const contactsRequest = () => ({type: CONTACTS_REQUEST});
export const contactsSuccess = () => ({type: CONTACTS_SUCCESS});
export const contactsError = error => ({type: CONTACTS_ERROR, error});

export const getContactsSuccess = (contacts) => ({type: GET_CONTACTS_SUCCESS, contacts});


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