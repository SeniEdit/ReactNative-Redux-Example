/**
 * Created by frank on 31-5-2017.
 */
import React, {Component} from 'react';
import { addNavigationHelpers } from 'react-navigation';
import {RootTabNavigator} from './TabNavConfiguration';

// Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        color: state.settings.color,
        navigationState: state.rootNav
    }
};

class TabNav extends Component {
    render() {
        const { navigationState, dispatch, color } = this.props;
        return (
            <RootTabNavigator
                screenProps={{tintColor: this.props.color}}
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        );
    }
}

export default connect(mapStateToProps)(TabNav);