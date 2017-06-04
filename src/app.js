/**
 * Created by frank on 31-5-2017.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux'
import reducers from './reducers'
import Root from './Root'

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Root/>
            </Provider>
        );
    }
}

export default App;