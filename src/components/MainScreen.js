/**
 * Created by frank on 31-5-2017.
 */
import React, {Component} from 'react';
import {Icon, Text, Content, List, ListItem} from 'native-base';
import PersonsList from './PersonsList';

class MainScreen extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        title: 'Personen',
        tabBarIcon: ({tintColor}) => (<Icon style={{color: screenProps.tintColor}} name="people"/>)
    });

    render() {
        return (
            <Content>
                <PersonsList />
            </Content>
        );
    }
}

export default MainScreen;
