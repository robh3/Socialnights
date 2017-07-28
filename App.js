import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { Provider } from 'mobx-react';


import Root from './rootRouter';
import stores from './src/stores';


export default class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <Root />
            </Provider>
        );
    }
}
