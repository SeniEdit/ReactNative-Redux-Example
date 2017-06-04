/**
 * Created by frank on 1-6-2017.
 */
import * as constants from '../constants/'

export function titleChanged(title) {
    return {
        type: constants.TITLE_CHANGED,
        payload: title
    }
}

export function colorChanged(color) {
    return {
        type: constants.COLOR_CHANGED,
        payload: color
    }
}

export function logoChanged(logoUrl) {
    return {
        type: constants.LOGO_CHANGED,
        payload: logoUrl
    }
}