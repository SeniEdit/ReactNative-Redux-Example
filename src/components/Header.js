/**
 * Created by frank on 31-5-2017.
 */
import React, {Component} from 'react';
import {Image} from 'react-native'
import {Header, Title,Body, Left, Right, Text} from 'native-base';

class HeaderComponent extends Component {
    render() {
        return(
            <Header style={{backgroundColor: this.props.color}}>
                <Left>
                    <Image source={this.props.img} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
                </Left>
                <Body>
                    <Title>
                        {this.props.title}
                    </Title>
                </Body>
            </Header>
        );
    }
}

export default HeaderComponent;