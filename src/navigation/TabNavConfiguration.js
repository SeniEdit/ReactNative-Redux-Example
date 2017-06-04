/**
 * Created by frank on 1-6-2017.
 */

import {
    TabNavigator, TabBarBottom
} from 'react-navigation';
import MainScreen from '../components/MainScreen';
import SettingsScreen from '../components/SettingsScreen';

const screens = {
    Main: {screen: MainScreen},
    Settings: {
        screen: SettingsScreen
    }
};

const config = {
    tabBarComponent: TabBarBottom,
    initialRouteName: 'Main',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: '#FFF'
        },
        inactiveTintColor: '#000',
        inactiveTextColor: '#000',
        indicatorStyle: {
            backgroundColor: '#000'
        }
    },
};

export const RootTabNavigator = TabNavigator(screens, config);