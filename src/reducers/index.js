/**
 * Created by frank on 1-6-2017.
 */
import { combineReducers } from 'redux';
import SettingsReducer from './SettingsReducer';
import {RootNavReducer} from './RootNavReducer';

export default combineReducers({
    settings: SettingsReducer,
    rootNav: RootNavReducer
})