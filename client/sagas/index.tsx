import { HOST, CONTACTS, CONTACT, SAVE, GET, UPDATE, DELETE } from '../constants/';
import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

type saveAction = {
    payload: {
        data: object,
    },
};

type updateAction = {
    payload: {
        data: {
            id: string | number,
            name: string,
            email: string,
            phone: string,
        },
    },
};

type deleteAction = {
    payload: {
        id: string | number,
    },
};



export function* watcher () {
    yield takeEvery(CONTACTS + GET, getContacts);
    yield takeEvery(CONTACT + SAVE, saveContact);
    yield takeEvery(CONTACT + UPDATE, updateContact);
    yield takeEvery(CONTACT + DELETE, deleteContact);
}

function* getContacts () {
    const response = yield call(axios.get, `${HOST}/contacts`);
    yield put({ type: CONTACTS + SAVE, payload: { contacts: response.data } });
}

function* saveContact (action: saveAction) {
    const { payload: { data } } = action;
    yield call(axios.post, `${HOST}/contacts`, data);
    yield call(getContacts);
}

function* updateContact (action: updateAction) {
    const { payload: { data: { id, name, email, phone } } } = action;
    yield call(axios.put, `${HOST}/contacts/${id}`, { name, email, phone });
    yield call(getContacts);
}

function* deleteContact (action: deleteAction) {
    const { payload: { id } } = action;
    yield call(axios.delete, `${HOST}/contacts/${id}`);
    yield call(getContacts);
}