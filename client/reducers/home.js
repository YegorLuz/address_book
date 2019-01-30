import { CONTACTS, SAVE } from '../constants/';
import { Map, List, fromJS } from 'immutable';

const defaultState = Map({
    contacts: List([]),
});

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type) {
        case CONTACTS + SAVE: {
            return state.set('contacts', fromJS(payload.contacts));
        }

        default: {
            return state;
        }
    }
};