/**
 * Created by frank on 31-5-2017.
 */
import React, {Component} from 'react';
import {Text, Button, Content, Form, Item, Input} from 'native-base';
import * as actions from '../actions/SettingsActions';
import {connect} from 'react-redux';
import {Icon} from 'native-base';

const url = 'https://image.freepik.com/free-icon/facebok-circular-logo_318-40188.jpg';
const url2 = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png';

class SettingsScreen extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarIcon: ({tintColor}) => (<Icon style={{color: screenProps.tintColor}} name="settings"/>)
    });

    colorChanged(color) {
        this.props.colorChanged(color);
    }

    logoChanged(logoUrl) {
        this.props.logoChanged(logoUrl);
    }

    render() {
        return(
            <Content>
                <Button bordered onPress={() => this.colorChanged('green')}>
                    <Text>GROEN</Text>
                </Button>
                <Button bordered onPress={() => this.colorChanged('red')}>
                    <Text>ROOD</Text>
                </Button>
                <Button bordered onPress={() => this.colorChanged('yellow')}>
                    <Text>GEEL</Text>
                </Button>
                <Button bordered onPress={() => this.colorChanged('blue')}>
                    <Text>BLAUW</Text>
                </Button>
                <Button bordered onPress={() => this.logoChanged(url)}>
                    <Text>LOGO 1</Text>
                </Button>
                <Button bordered onPress={() => this.logoChanged(url2)}>
                    <Text>LOGO 2</Text>
                </Button>
            </Content>
        );
    }
}

mapStateToProps = state => {
    return {
        navIndex: state.rootNav.index
    }
}

export default connect(mapStateToProps, actions)(SettingsScreen);