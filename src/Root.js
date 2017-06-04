/**
 * Created by frank on 31-5-2017.
 */
import React, {Component} from 'react';
import {Container, Footer, Content, View, Text} from 'native-base';
import TabNav from './navigation/TabNav';
import HeaderComponent from "./components/Header";
import {connect} from 'react-redux';

class Root extends Component {
    render() {
        return (
            <Container>
                <HeaderComponent title='Persoonbeheer' img={this.props.url} color={this.props.color}/>
                <TabNav/>
            </Container>
        );
    }
}

mapStateToProps = state => {
    return {
        color: state.settings.color,
        url: state.settings.logoUrl
    }
}

export default connect(mapStateToProps)(Root);