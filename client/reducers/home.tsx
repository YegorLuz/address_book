import { Map } from 'immutable';
import { string } from 'prop-types';

const defaultState = Map({
    test: '',
});

type actionType = {
    type: string,
};

export default (state: object = defaultState, action: actionType) => {
    const { type } = action;
    switch(type) {
        case 'INIT': {
            return state.set('test', 'kuku');
        }

        default: {
            return state;
        }
    }
}