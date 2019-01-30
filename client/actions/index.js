import { CONTACTS, CONTACT, UPDATE, SAVE, GET, DELETE } from '../constants/';

export function getContacts () {
    return {
        type: CONTACTS + GET,
    };
}

export function addContact (data) {
    return {
        type: CONTACT + SAVE,
        payload: {
            data,
        },
    };
}

export function updateContact (data) {
    return {
        type: CONTACT + UPDATE,
        payload: {
            data,
        },
    };
}

export function deleteContact (id) {
    return {
        type: CONTACT + DELETE,
        payload: {
            id,
        },
    };
}