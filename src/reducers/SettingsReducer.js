/**
 * Created by frank on 1-6-2017.
 */
import * as constants from '../constants/'

const INITIAL_STATE = {
    color: 'blue',
    logoUrl: {uri: 'https://image.freepik.com/free-icon/facebok-circular-logo_318-40188.jpg'}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.COLOR_CHANGED:
            return {...state, color: action.payload};
        case constants.LOGO_CHANGED:
            return {...state, logoUrl: {uri: action.payload}};
        default:
            return state;
    }
};