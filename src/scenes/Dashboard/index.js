import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import { TabNavigator } from "react-navigation";


import Home from "src/scenes/Dashboard/Home";
import Users from "src/scenes/Dashboard/Users";
import Guide from "src/scenes/Dashboard/Guide";
import Groups from "src/scenes/Dashboard/Groups";
import Profile from "src/scenes/Dashboard/Profile";

import Images from 'assets/images';
import * as css from 'src/style';

export const SignedIn = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={Images.iconHome} style={[{tintColor: tintColor}]}/>
            ),

        }
    },
    Users: {
        screen: Users,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={Images.iconUsers} style={[{tintColor: tintColor}]}/>
            ),

        }
    },
    Guide: {
        screen: Guide,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={Images.iconGuide} style={[{tintColor: tintColor}]}/>
            ),

        }
    },
    Groups: {
        screen: Groups,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={Images.iconGroups} style={[{tintColor: tintColor}]}/>
            ),

        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={Images.iconProfile} style={[{tintColor: tintColor}]}/>
            )
        }
    },
},
    {
        headerMode: 'screen',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            ...css.tabs
        },
    }
);


export default class Dashboard extends Component {

    render() {
        return <SignedIn />;
    }


}
