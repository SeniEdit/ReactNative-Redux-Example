/**
 * Created by frank on 1-6-2017.
 */
import { RootTabNavigator } from '../navigation/TabNavConfiguration'

const INITIAL_STATE = {
    navigation: {
        root: RootTabNavigator.router.getStateForAction(RootTabNavigator.router.getActionForPathAndParams('Main'))
    }
};

export const RootNavReducer = (state = INITIAL_STATE.navigation.root, action) => {
    const nextState = RootTabNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};