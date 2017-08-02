import React, { Component } from 'react';
import {
    AppRegistry,
    ActivityIndicator,
    View,
    StyleSheet,
    AsyncStorage,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Loading from './src/scenes/Loading';
import Landing from './src/scenes/Landing';
import Register from './src/scenes/Register';
import RegisterConfirmation from './src/scenes/Register/Confirmation';
import Login from './src/scenes/Login';
import Dashboard from './src/scenes/Dashboard';
import {API, DEV } from './src/utils/config';
import * as css from './src/style';



const AppRouter = StackNavigator({
    Landing: {
        screen: Landing,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            ...css.header,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            ...css.header,
        }
    },
},{
    initialRouteName: 'Landing',
    headerMode: 'screen',
});


export default class RootRouter extends Component {
    constructor(){
        super();

        this._logout = this._logout.bind(this);
        this._updateUser = this._updateUser.bind(this);

        this.state = {
            user          : null,
            ready         : false,
            initialRoute  : 'Landing',
        }
    }

    _navigateTo = (routeName: string) => {
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }

    componentDidMount(){
        this._loadLoginCredentials()
    }

    async _loadLoginCredentials(){
        try {
            let sid = await AsyncStorage.getItem('sid');
            console.log('SID', sid);
            if (sid){
                this._fetchUser(sid);
            } else {
                this.ready();
            }
        } catch (err) {
            this.ready(err);
        }
    }

    ready(err){
        this.setState({ ready: true });
    }

    _fetchUser(sid){
        fetch(`${API}/users/me`, { headers: extend(Headers, { 'Set-Cookie': `sid=${sid}`})})
            .then(response => response.json())
            .then(user => this.setState({ user, ready: true, initialRoute: 'Dashboard' }))
            .catch(err => this.ready(err))
            .done();
    }

    _logout(){
        this.nav.push({ name: 'Landing' })
    }

    _updateUser(user){
        this.setState({ user });
    }

    render() {
        if ( ! this.state.ready ) { return <Loading /> }

        return (
            <AppRouter/>
        );
    }
}
