import Expo from "expo";
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
import AppLoading from './src/scenes/Loading'
import Root from './rootRouter';
import stores from './src/stores';

export default class App extends Component {

    state = {isReady: false };

    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentDidMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }
        return (
                <Provider {...stores}>
                    <Root />
                </Provider>
        );
    }
}
