import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { Provider } from 'mobx-react';


import Stack from './src/rootRouter';
import stores from './src/stores';


export default class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <Stack />
            </Provider>
        );
    }
}
