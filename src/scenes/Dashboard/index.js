import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { TabNavigator } from "react-navigation";


import Home from "src/scenes/Dashboard/Home";
import Users from "src/scenes/Dashboard/Users";
import Guide from "src/scenes/Dashboard/Guide";
import Groups from "src/scenes/Dashboard/Groups";
import Profile from "src/scenes/Dashboard/Profile";

export const SignedIn = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="home" size={30} color={tintColor} />
            )
        }
    },
    Users: {
        screen: Users,
        navigationOptions: {
            tabBarLabel: "Users",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={30} color={tintColor} />
            )
        }
    },
    Guide: {
        screen: Guide,
        navigationOptions: {
            tabBarLabel: "Guide",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="guide" size={30} color={tintColor} />
            )
        }
    },
    Groups: {
        screen: Groups,
        navigationOptions: {
            tabBarLabel: "Groups",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={30} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={30} color={tintColor} />
            )
        }
    },
},
    {
        tabBarPosition: 'bottom'
    }
);


export default class Dashboard extends Component {

    render() {
        return <SignedIn />;
    }


}
