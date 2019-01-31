import { CONTACTS, SAVE } from '../constants/';
import { Map, List, fromJS } from 'immutable';

const defaultState = Map({
    contacts: List([]),
});

type actionType = {
    type: string,
    payload: {
        contacts: Array<object>,
    },
};

export default (state = defaultState, action: actionType) => {
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