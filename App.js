import React, { Component } from 'react';
import {
    StatusBar,
    Platform,
    Dimensions,
} from 'react-native';

import { Provider } from 'mobx-react';

// Status Bar Style
StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('#000');
    StatusBar.setTranslucent(false)
}

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
